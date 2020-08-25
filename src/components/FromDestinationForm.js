import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import MapContext from '../providers/MapProvider';
import Geocoder from 'react-map-gl-geocoder';

const positionOptions = {
  enableHighAccuracy: true,
};

export default function FromDestinationForm({ setRoutes, setFetching }) {
  const {
    map,
    token,
    setViewport,
    bbox,
    setOrigin,
    origin,
    setDestination,
    supportsGeolocation,
  } = useContext(MapContext);

  const originContainerRef = useRef();
  const destContainerRef = useRef();

  const originGeocoder = useRef();
  const destGeocoder = useRef();

  const [trackCurrentPosition, setTrackCurrentPosition] = useState(false);
  const _positionWatcher = useRef();

  const clearWatcher = useCallback(() => {
    if (supportsGeolocation) {
      navigator.geolocation.clearWatch(_positionWatcher.current);
      _positionWatcher.current = null;
    }
  }, [supportsGeolocation]);

  const watchCurrentPostition = useCallback(() => {
    if (supportsGeolocation) {
      setTrackCurrentPosition(true);
      _positionWatcher.current = navigator.geolocation.watchPosition(
        (position) => {
          const coords = position.coords;
          if (coords.accuracy <= 500) {
            setOrigin([coords.longitude, coords.latitude]);
            setTrackCurrentPosition(true);
            originGeocoder.current.query(
              [coords.latitude, coords.longitude].join(',')
            );
          } else {
            setTrackCurrentPosition(false);
          }
        },
        //onError
        console.log,
        positionOptions
      );
    }
  }, [supportsGeolocation, setOrigin]);

  useEffect(() => {
    watchCurrentPostition();
    return clearWatcher;
  }, [watchCurrentPostition, clearWatcher]);

  const geocoderProps = {
    mapRef: map,
    bbox,
    reverseGeocode: true,
    countries: 'iq',
    onViewportChange: (vp) =>
      setViewport({
        ...vp,
        longitude: vp.longitude - 0.01,
        transitionDuration: 1000,
        zoom: vp.zoom > 11 ? 11 : vp.zoom,
      }),
    mapboxApiAccessToken: token,
    enableEventLogging: false,
  };

  const fetchRoutes = (origin, destination) => {
    setFetching(true);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({ origin, destination }),
    };
    fetch(
      'https://us-central1-mapsproject-228715.cloudfunctions.net/getRoutes',
      // 'http://localhost:5001/mapsproject-228715/us-central1/getRoutes',
      options
    )
      .then((res) => res.json())
      .then((routes) => {
        routes.length && setRoutes(routes);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
        setFetching(false);
      });
  };

  return (
    <form className="flex justify-between bg-dblue boxshadow rounded-lg px-5 pt-3 pb-8">
      <div>
        <label className="text-white font-medium mb-1" htmlFor="from-input">
          From:
        </label>
        <div className="relative">
          <div className="py-1" ref={originContainerRef}>
            <Geocoder
              {...geocoderProps}
              containerRef={originContainerRef}
              onResult={(res) => {
                !trackCurrentPosition && setOrigin(res.result.center);
              }}
              onClear={() => {
                if (trackCurrentPosition) {
                  setTrackCurrentPosition(false);
                  clearWatcher();
                }
                setOrigin(null);
              }}
              placeholder={
                trackCurrentPosition ? 'Getting location...' : 'Choose origin'
              }
              onInit={(geocoder) => {
                originGeocoder.current = geocoder;
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <label className="text-white font-medium mb-1" htmlFor="to-input">
          To:
        </label>
        <div className="relative ml-1">
          <div className="py-1" ref={destContainerRef}>
            <Geocoder
              {...geocoderProps}
              containerRef={destContainerRef}
              onResult={(res) => {
                setDestination(res.result.center);
                fetchRoutes(origin, res.result.center);
              }}
              onClear={() => {
                setDestination(null);
              }}
              placeholder={'Choose destination'}
              onInit={(geocoder) => {
                destGeocoder.current = geocoder;
                if (origin && !geocoder._inputEl.value)
                  geocoder._inputEl.focus();
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

FromDestinationForm.propTypes = {
  setRoutes: PropTypes.func.isRequired,
  setFetching: PropTypes.func,
};
