import React, { useState, useRef } from 'react';
import ReactMapGL from 'react-map-gl';
import LocateMeBtn from './LocateMeBtn';
export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 36.206291,
    longitude: 44.008869,
    width: '100%',
    height: '100%',
    zoom: 11,
  });

  const map = useRef();
  return (
    <>
      <ReactMapGL
        {...viewport}
        ref={map}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport({ ...viewport, width: '100%', height: '100%' });
        }}
        mapStyle="mapbox://styles/shna/ckd4x2xmy02kh1ir3hihcr36m"
      >
        <div className="h-full flex flex-row-reverse items-end p-16">
          <LocateMeBtn />
        </div>
      </ReactMapGL>
    </>
  );
}
