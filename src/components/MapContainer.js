import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { Source, Layer, Marker } from 'react-map-gl';
import LocateMeBtn from './LocateMeBtn';
import data from '../data/map-points.json';
import pointMark from '../assets/point-marker.png';
import destMark from '../assets/destination-marker.png';
import location from '../assets/location.png';
import Geocoder from 'react-map-gl-geocoder';
import PropTypes from 'prop-types';

export default function Map({ RefFrom, RefDestination }) {
  const [viewport, setViewport] = useState({
    latitude: 36.206291,
    longitude: 44.008869,
    width: '100%',
    height: '100%',
    zoom: 11,
  });

  // Toggle this to show route or points

  // @JalalArif TODO: remove eslint disabling below once you implement your issue
  // eslint-disable-next-line no-unused-vars
  const [showRoute, toggleRoute] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [route, setRoute] = useState(routeObj);
  // eslint-disable-next-line no-unused-vars
  const [destinations, setDestinations] = useState(data);

  const _mapRef = useRef();

  useEffect(() => {
    // Load all markers and images
    const map = _mapRef.current.getMap();
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
  }, [_mapRef]);
  const [markers, setMarkers] = useState([]);
  return (
    <>
      <ReactMapGL
        {...viewport}
        ref={_mapRef}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport({ ...viewport, width: '100%', height: '100%' });
        }}
        mapStyle="mapbox://styles/shna/ckd4x2xmy02kh1ir3hihcr36m"
      >
        {!showRoute && (
          <Source id="destinations" type="geojson" data={destinations}>
            <Layer
              type="symbol"
              minzoom={10}
              layout={{
                'icon-image': 'pointMark',
                'icon-size': 1 / 4,
                'icon-offset': [5, 0],
              }}
            />
          </Source>
        )}

        {/* Show Route */}

        {showRoute && (
          <>
            <Source id="polylineLayer" type="geojson" data={route.path}>
              <Layer
                minzoom={9.8}
                id="lineLayer"
                type="line"
                source="my-data"
                layout={{
                  'line-join': 'round',
                  'line-cap': 'round',
                }}
                paint={{
                  'line-color': '#36AF47',
                  'line-width': 8,
                }}
                filter={['==', '$type', 'LineString']}
              />
              <Layer
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
              />
            </Source>
          </>
        )}
        {markers.map((place) => {
          return (
            <Marker
              key={'marker' + place.properties.ID}
              latitude={place.geometry.coordinates[1]}
              longitude={place.geometry.coordinates[0]}
            >
              <button className="focus:outline-none">
                <img src={location} alt="location" />
              </button>
            </Marker>
          );
        })}
        <div className="h-full flex flex-row-reverse items-end p-16">
          <LocateMeBtn />
        </div>
        <Geocoder
          mapRef={_mapRef}
          containerRef={RefFrom}
          // onResult={(event) => console.log(event.result.geometry)}
          onViewportChange={(viewport) => {
            setMarkers((oldMarkers) => {
              const newMarkers = [...oldMarkers];
              newMarkers[0] = {
                type: 'Feature',
                properties: { ID: 0 },
                geometry: {
                  type: 'Point',
                  coordinates: [viewport.longitude, viewport.latitude],
                },
              };
              return newMarkers;
            });
            setViewport({ ...viewport, width: '100%', height: '100%' });
          }}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
        <Geocoder
          mapRef={_mapRef}
          containerRef={RefDestination}
          // onResult={(event) => console.log(event.result.geometry)}
          onViewportChange={(viewport) => {
            setMarkers((oldMarkers) => {
              const newMarkers = [...oldMarkers];
              newMarkers[1] = {
                type: 'Feature',
                properties: { ID: 1 },
                geometry: {
                  type: 'Point',
                  coordinates: [viewport.longitude, viewport.latitude],
                },
              };
              return newMarkers;
            });
            setViewport({ ...viewport, width: '100%', height: '100%' });
          }}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
      </ReactMapGL>
    </>
  );
}

const routeObj = {
  name: 'Havalan - Qalat',
  start: [44.0496826171875, 36.1949017703261],
  end: [44.01165962219238, 36.19067640168397],
  path: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            [44.0496826171875, 36.1949017703261],
            [44.026336669921875, 36.191299831067624],
            [44.01947021484375, 36.19012223806529],
            [44.019126892089844, 36.18811336207514],
            [44.01251792907715, 36.1881826345188],
            [44.01449203491211, 36.19012223806529],
            [44.01165962219238, 36.19067640168397],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { type: 'start' },
        geometry: {
          type: 'Point',
          coordinates: [44.0496826171875, 36.1949017703261],
        },
      },
      {
        type: 'Feature',
        properties: { type: 'end' },
        geometry: {
          type: 'Point',
          coordinates: [44.01165962219238, 36.19067640168397],
        },
      },
    ],
  },
};
Map.propTypes = {
  RefFrom: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  RefDestination: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
