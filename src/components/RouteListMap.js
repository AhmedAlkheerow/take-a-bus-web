import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function RouteListMap() {
  const [viewport, setViewport] = useState({
    latitude: 36.206291,
    longitude: 44.008869,
    width: '100%',
    height: '100%',
    zoom: 11,
  });

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport({ ...viewport, width: '100%', height: '100%' });
        }}
        mapStyle="mapbox://styles/shna/ckd4x2xmy02kh1ir3hihcr36m"
      ></ReactMapGL>
    </>
  );
}
