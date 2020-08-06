import React from 'react';
import { GeolocateControl } from 'react-map-gl';
export default function LocateMeBtn() {
  return (
    <div className="btn btn-blue w-16 h-16 bg-blue-500 rounded-full flex flex-col justify-center items-center">
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
    </div>
  );
}
