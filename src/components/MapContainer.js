import React, { useState, useRef } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import LocateMeBtn from './LocateMeBtn';
export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 36.206291,
    longitude: 44.008869,
    width: '100%',
    height: '100%',
    zoom: 11,
  });

  const data = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { ID: 0 },
        geometry: {
          type: 'Point',
          coordinates: [44.00951385498047, 36.190537861146936],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 1 },
        geometry: {
          type: 'Point',
          coordinates: [43.982391357421875, 36.1902607793376],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 2 },
        geometry: {
          type: 'Point',
          coordinates: [43.995094299316406, 36.22848880036843],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 3 },
        geometry: {
          type: 'Point',
          coordinates: [44.02427673339844, 36.22211876039103],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 4 },
        geometry: {
          type: 'Point',
          coordinates: [44.042816162109375, 36.16421071237066],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 5 },
        geometry: {
          type: 'Point',
          coordinates: [44.05414581298828, 36.186935721158335],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 6 },
        geometry: {
          type: 'Point',
          coordinates: [43.99303436279297, 36.173079792635654],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 7 },
        geometry: {
          type: 'Point',
          coordinates: [44.07096862792969, 36.17169406500341],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 8 },
        geometry: {
          type: 'Point',
          coordinates: [44.06169891357422, 36.1509052102578],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 9 },
        geometry: {
          type: 'Point',
          coordinates: [44.110450744628906, 36.14979631649761],
        },
      },
      {
        type: 'Feature',
        properties: { ID: 10 },
        geometry: {
          type: 'Point',
          coordinates: [44.056549072265625, 36.11735423846348],
        },
      },
    ],
  };

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
              <button>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d)">
                    <circle cx="16.5" cy="12.5" r="12.5" fill="#18A0FB" />
                    <circle
                      cx="16.5"
                      cy="12.5"
                      r="11.5"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="0"
                      y="0"
                      width="33"
                      height="33"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
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
