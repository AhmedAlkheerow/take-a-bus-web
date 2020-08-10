import React, { useState, useRef } from 'react';
import ReactMapGL, { Marker, Source, Layer } from 'react-map-gl';
import LocateMeBtn from './LocateMeBtn';
function Map() {
  const [viewport, setViewport] = useState({
    longitude: 44.00863002505405,
    latitude: 36.193752726372445,
    width: '100%',
    height: '100%',
    zoom: 11,
  });
  const map = useRef();
  const [data] = useState({
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
  });
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
        onClick={(e) => {
          console.log(e);
        }}
      >
        <Source id="polylineLayer" type="geojson" data={data}>
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
          longitude={44.01165962219238}
          latitude={36.19067640168397}
          offsetLeft={-10}
          offsetTop={-10}
        >
          <svg
            className="h-10 w-10"
            viewBox="0 0 55 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.3 0C12.2395 0 0 12.2395 0 27.3C0 36.491 5.3235 44.1805 11.5115 49.5495C13.468 51.233 16.8805 53.9175 19.929 57.876C23.296 62.2895 26.3445 67.0215 27.3 70.2065C28.2555 67.0215 31.304 62.2895 34.671 57.876C37.7195 53.9175 41.132 51.233 43.0885 49.5495C49.2765 44.1805 54.6 36.491 54.6 27.3C54.6 12.2395 42.3605 0 27.3 0Z"
              fill="#18A0FB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.8008 26.3999C40.8008 29.9803 39.3785 33.4141 36.8467 35.9458C34.315 38.4776 30.8812 39.8999 27.3008 39.8999C23.7204 39.8999 20.2866 38.4776 17.7548 35.9458C15.2231 33.4141 13.8008 29.9803 13.8008 26.3999C13.8008 22.8195 15.2231 19.3857 17.7548 16.854C20.2866 14.3222 23.7204 12.8999 27.3008 12.8999C30.8812 12.8999 34.315 14.3222 36.8467 16.854C39.3785 19.3857 40.8008 22.8195 40.8008 26.3999ZM34.1014 21.2868C33.9809 21.1667 33.8373 21.0721 33.6794 21.0087C33.5215 20.9453 33.3524 20.9144 33.1823 20.9179C33.0121 20.9214 32.8444 20.9591 32.6892 21.0289C32.534 21.0986 32.3945 21.199 32.2789 21.3239L26.4182 28.7911L22.8863 25.2575C22.6464 25.0339 22.329 24.9122 22.0011 24.918C21.6733 24.9238 21.3604 25.0566 21.1285 25.2885C20.8967 25.5204 20.7638 25.8332 20.758 26.1611C20.7523 26.489 20.874 26.8063 21.0975 27.0462L25.5627 31.513C25.6829 31.6331 25.8262 31.7277 25.9838 31.7912C26.1415 31.8547 26.3103 31.8858 26.4802 31.8827C26.6502 31.8795 26.8177 31.8422 26.9729 31.7729C27.1281 31.7036 27.2677 31.6037 27.3835 31.4793L34.12 23.0587C34.3496 22.8199 34.4765 22.5006 34.4733 22.1693C34.4702 21.838 34.3373 21.5211 34.1031 21.2868H34.1014Z"
              fill="#38EF52"
            />
          </svg>
        </Marker>
        <Marker
          longitude={44.0496826171875}
          latitude={36.1949017703261}
          offsetLeft={-10}
          offsetTop={-10}
        >
          <svg
            className="h-10 w-10"
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
        </Marker>

        <div className="h-full flex flex-row-reverse items-end p-16">
          <LocateMeBtn />
        </div>
      </ReactMapGL>
    </>
  );
}

export default Map;
