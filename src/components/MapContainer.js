import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import LocateMeBtn from './LocateMeBtn';
import data from '../data/map-points.json';
import pointMark from '../assets/point-marker.png';
import destMark from '../assets/destination-marker.png';
// import SuggestionContainer from './SuggestionsContainer';
import { clickItemDraw } from '../pages/Home';

export default function Map() {
  const { coords, showRoute } = useContext(clickItemDraw);
  const [viewport, setViewport] = useState({
    latitude: 36.206291,
    longitude: 44.008869,
    width: '100%',
    height: '100%',
    zoom: 11,
  });

  // Toggle this to show route or points

  // @JalalArif TODO: remove eslint disabling below once you implement your issue
  // eslint-disable-next-line no-unused-vars

  // const [showRoute, setShowRoute] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const routeObj = coords && {
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
            // coordinates: coords,
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
  const [route, setRoute] = useState(routeObj);

  // eslint-disable-next-line no-unused-vars
  const [destinations, setDestinations] = useState(data);
  console.log(coords);
  const _mapRef = useRef();

  // function DrawMap(path) {
  //   setRoute(path);
  //   setShowRoute(true);
  // }
  useEffect(() => {
    // Load all markers and images
    const map = _mapRef.current.getMap();
    if (map) {
      map.loadImage(pointMark, (error, image) => {
        if (error) throw error;
        if (!map.hasImage('pointMark')) map.addImage('pointMark', image);
      });

      map.loadImage(destMark, (error, image) => {
        if (error) throw error;
        if (!map.hasImage('destMark')) map.addImage('destMark', image);
      });
    }
    setRoute({
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
              coordinates: coords,
              // coordinates: [
              //   [44.01165962219238, 36.20376737643796],
              //   [44.0167236328125, 36.20279774967046],
              //   [44.023332595825195, 36.19909227958814],
              //   [44.0262508392334, 36.19161154389828],
              //   [44.026336669921875, 36.18496140107185],
              //   [44.023933410644524, 36.18056229840559],
              //   [44.01852607727051, 36.17619759021374],
              //   [44.00299072265625, 36.174188357098366],
              //   [43.99960041046142, 36.17605902406675],
              // ],
            },
          },
        ],
      },
    });
  }, [coords]);

  return (
    <>
      <ReactMapGL
        // onClick={() => setShowRoute(!showRoute)}
        {...viewport}
        ref={_mapRef}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport({ ...viewport, width: '100%', height: '100%' });
        }}
        mapStyle="mapbox://styles/jalalsoft/ckdjf85k204gq1imvqrmgwtgu"
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
          </>
        )}
        <div className="h-full flex flex-row-reverse items-end p-16">
          <LocateMeBtn />
        </div>
      </ReactMapGL>
    </>
  );
}
