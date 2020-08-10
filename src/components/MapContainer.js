import React, { useState, useRef } from 'react';
import ReactMapGL, { Marker, Source, Layer } from 'react-map-gl';
import LocateMeBtn from './LocateMeBtn';
import destMark from '../assets/destination-marker.svg';
import fromMark from '../assets/from-marker.svg';

const route = {
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
    ],
  },
};

function Map() {
  const [viewport, setViewport] = useState({
    longitude: 44.00863002505405,
    latitude: 36.193752726372445,
    width: '100%',
    height: '100%',
    zoom: 11,
  });
  const map = useRef();
  const [data] = useState(route);

  return (
    <>
      <ReactMapGL
        {...viewport}
        ref={(ref) => (map.current = ref ? ref.getMap() : null)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport({ ...viewport, width: '100%', height: '100%' });
        }}
        mapStyle="mapbox://styles/shna/ckd4x2xmy02kh1ir3hihcr36m"
      >
        <Source id="polylineLayer" type="geojson" data={data.path}>
          <Layer
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
          />
        </Source>
        <Marker
          longitude={route.start[0]}
          latitude={route.start[1]}
          offsetLeft={-15}
          offsetTop={-18}
        >
          <img className="w-10 h-10" src={fromMark} alt="from" />
        </Marker>
        <Marker
          longitude={route.end[0]}
          latitude={route.end[1]}
          offsetLeft={-22}
          offsetTop={-40}
        >
          <img className="w-10 h-10" src={destMark} alt="to" />
        </Marker>
        <div className="h-full flex flex-row-reverse items-end p-16">
          <LocateMeBtn />
        </div>
      </ReactMapGL>
    </>
  );
}

export default Map;
