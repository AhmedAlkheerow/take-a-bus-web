import React, { useState, useRef } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import LocateMeBtn from './LocateMeBtn';
import * as data from '../data/map-points.json';
import point from '../assets/point.png';

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
        {data.features.map((place) => {
          return (
            <Marker
              key={place.properties.ID}
              latitude={place.geometry.coordinates[1]}
              longitude={place.geometry.coordinates[0]}
            >
              <button className="focus:outline-none">
                <img src={point} alt="point" />
              </button>
            </Marker>
          );
        })}
        <div className="h-full flex flex-row-reverse items-end p-16">
          <LocateMeBtn />
        </div>
      </ReactMapGL>
    </>
  );
}
