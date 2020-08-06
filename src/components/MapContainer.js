import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import LocateMeBtn from './LocateMeBtn';
export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 36.206291,
    longitude: 44.008869,
    width: '100vw',
    height: '100vh',
    zoom: 11,
  });
  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/ahmadduhoki/ckdd0tsyr3o311iog0cehzy4x"
      >
        <div className="h-full flex flex-row-reverse items-end p-16">
          <LocateMeBtn />
        </div>
      </ReactMapGL>
    </>
  );
}
