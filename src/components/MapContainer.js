import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import LocateMeBtn from './LocateMeBtn';
import data from '../data/map-points.json';
import pointMark from '../assets/point-marker.png';
import destMark from '../assets/destination-marker.png';

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 36.206291,
    longitude: 44.008869,
    width: '100%',
    height: '100%',
    zoom: 11,
  });

  // Toggle this to show route or points
  const [showRoute, toggleRoute] = useState(false);
  const [route, setRoute] = useState(routeObj);
  const [destinations, setDestinations] = useState(data);

  const _mapRef = useRef();

  useEffect(() => {
    // Load all markers and images
    const map = _mapRef.current.getMap();
    map.loadImage(pointMark, (error, image) => {
      if (error) throw error;
      if (!map.hasImage('pointMark')) map.addImage('pointMark', image);
    });

    map.loadImage(destMark, (error, image) => {
      if (error) throw error;
      if (!map.hasImage('destMark')) map.addImage('destMark', image);
    });
  }, [_mapRef]);

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
            {/* <Marker
              longitude={route.start[0]}
              latitude={route.start[1]}
              offsetLeft={-15}
              offsetTop={-18}
            >
              <img className="w-10 h-10" src={point} alt="from" />
            </Marker>
            <Marker
              longitude={route.end[0]}
              latitude={route.end[1]}
              offsetLeft={-22}
              offsetTop={-40}
            >
              <img className="w-10 h-10" src={destMark} alt="to" />
            </Marker> */}
          </>
        )}
        <div className="h-full flex flex-row-reverse items-end p-16">
          <LocateMeBtn />
        </div>
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
