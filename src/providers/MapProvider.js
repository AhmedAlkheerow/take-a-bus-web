import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useDebugValue,
  createContext,
} from 'react';
import PropTypes from 'prop-types';

import ReactMapGL, { Source, Layer, Marker } from 'react-map-gl';

// import LocateMeButton from '../components/LocateMeBtn';

import pointMark from '../assets/point-marker.png';
import destMark from '../assets/destination-marker.png';

const initialState = {
  map: null,
  origin: null,
  destination: null,
  route: null,
  supportsGeolocation: false,
  viewport: {
    // For Erbil City
    latitude: 36.206291,
    longitude: 44.008869 - 9 / 100,
    width: '100%',
    height: '100%',
    zoom: 11,
    maxZoom: 14,
  },
  bbox: [
    43.795623779296875,
    35.98689628443789,
    44.285888671875,
    36.32065774818664,
  ],
  token: process.env.REACT_APP_MAPBOX_TOKEN,
};

const MapContext = createContext();
export default MapContext;

export function MapProvider(props) {
  const [viewport, setViewport] = useStateLabel(
    initialState.viewport,
    'viewport'
  );
  const [route, setRoute] = useStateLabel(null, 'route');
  const [origin, setOrigin] = useStateLabel(null, 'origin');
  const [destination, setDestination] = useStateLabel(null, 'destination');
  const [marks, setMarks] = useStateLabel([], 'marks');
  const [supportsGeolocation, setSupportsGeolocation] = useStateLabel(
    false,
    'geo'
  );

  const onClickListeners = useRef([]);

  // init geolocation support
  useEffect(() => {
    console.log('Checking Geolocation Support');
    if (window.navigator && window.navigator.permissions !== undefined) {
      // navigator.permissions has incomplete browser support
      // http://caniuse.com/#feat=permissions-api
      // Test for the case where a browser disables Geolocation because of an
      // insecure origin
      window.navigator.permissions.query({ name: 'geolocation' }).then((p) => {
        setSupportsGeolocation(p.state !== 'denied');
      });
    } else {
      setSupportsGeolocation(!!window.navigator.geolocation);
    }
  }, [setSupportsGeolocation]);

  const _mapRef = useRef();

  const _onViewportChange = (vp) => {
    setViewport({
      ...vp,
      width: '100%',
      height: '100%',
      zoom: vp.zoom > 14 ? 14 : vp.zoom,
    });
  };

  const _onClick = useCallback(
    (e) => {
      onClickListeners.current.forEach((cb) => {
        cb(e);
      });
    },
    [onClickListeners]
  );

  const addOnClickListener = useCallback(
    (cb) => {
      onClickListeners.current.push(cb);
    },
    [onClickListeners]
  );

  const addMark = (mark) => {
    setMarks([...marks, mark]);
  };

  useEffect(() => {
    // Load all markers and images
    const map = _mapRef.current.getMap();
    loadMarkers(map);
  }, []);

  // useEffect(() => {
  //   if (origin && destination) {
  //     console.log('fitting');
  //     // _mapRef.current.getMap().fitBounds([origin, destination]);
  //   }
  // }, [origin, destination]);

  return (
    <MapContext.Provider
      value={{
        map: _mapRef,
        route,
        origin,
        destination,
        viewport,
        setRoute,
        setOrigin,
        setDestination,
        addOnClickListener,
        setViewport: _onViewportChange,
        addMark,
        token: initialState.token,
        bbox: initialState.bbox,
        supportsGeolocation,
      }}
    >
      <ReactMapGL
        onClick={_onClick}
        {...viewport}
        ref={_mapRef}
        mapboxApiAccessToken={initialState.token}
        onViewportChange={_onViewportChange}
        mapStyle="mapbox://styles/shna/ckd4x2xmy02kh1ir3hihcr36m"
      >
        {/* Route Drawing */}
        {route && <Route route={route} />}

        {/* Draw Origin */}
        {origin && (
          <Marker longitude={origin[0]} latitude={origin[1]}>
            <img alt="Origin Marker" src={pointMark} className="w-6" />
          </Marker>
        )}

        {/* Draw Destination */}
        {destination && (
          <Marker longitude={destination[0]} latitude={destination[1]}>
            <img alt="Destination Marker" src={destMark} className="w-6" />
          </Marker>
        )}

        {marks.length > 0 &&
          marks.map(({ lat, lon, children }) => (
            <Marker key={lat + lon} latitude={lat} longitude={lon}>
              {children}
            </Marker>
          ))}

        {/* Locate me button */}
        {/* <div className="absolute bottom-0 right-0 m-16">
          <LocateMeButton />
        </div> */}
      </ReactMapGL>
      {props.children}
    </MapContext.Provider>
  );
}

MapProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

function loadMarkers(map) {
  if (map) {
    map.loadImage(pointMark, (error, image) => {
      if (error) throw error;
      if (!map.hasImage('pointMark')) map.addImage('pointMark', image);
    });

    map.loadImage(destMark, (error, image) => {
      if (error) throw error;
      if (!map.hasImage('destMark')) map.addImage('destMark', image);
    });
  }
}

function Route({ route, lineColor = '#36AF47' }) {
  return (
    <Source id="polylineLayer" type="geojson" data={route.path}>
      <Layer
        minzoom={9.8}
        id="lineLayer"
        type="line"
        layout={{
          'line-join': 'round',
          'line-cap': 'round',
        }}
        paint={{
          'line-color': lineColor,
          'line-width': 8,
        }}
        filter={['==', '$type', 'LineString']}
      />
      {/* <Layer
        type="symbol"
        minzoom={10}
        layout={{
          'icon-image': 'pointMark',
          'icon-size': 1 / 4,
          'icon-offset': [5, 0],
        }}
        filter={['==', 'type', 'start']}
      />

      <Layer
        type="symbol"
        minzoom={10}
        layout={{
          'icon-image': 'destMark',
          'icon-size': 1 / 2,
          'icon-offset': [-5, -30],
        }}
        filter={['==', 'type', 'end']}
      /> */}
    </Source>
  );
}

Route.propTypes = {
  route: PropTypes.object,
  lineColor: PropTypes.string,
};

function useStateLabel(initialValue, name) {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${name}: ${value}`);
  return [value, setValue];
}
