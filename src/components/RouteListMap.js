import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

export default function RouteListMap({ path }) {
  const [viewport, setViewport] = useState({
    latitude: 36.206291,
    longitude: 44.008869,
    width: '100%',
    height: '100%',
    zoom: 11,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(viewport) => {
        setViewport({ ...viewport, width: '100%', height: '100%' });
      }}
      mapStyle="mapbox://styles/shna/ckd4x2xmy02kh1ir3hihcr36m"
    >
      {path && (
        <Source id="polylineLayer" type="geojson" data={path}>
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
          />
        </Source>
      )}
    </ReactMapGL>
  );
}

RouteListMap.propTypes = {
  path: PropTypes.object,
};
