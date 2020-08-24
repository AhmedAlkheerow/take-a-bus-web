import React, { useState, useRef, useEffect } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import BusInfoContainer from '../components/BusInfoContainer';
import { useParams } from 'react-router-dom';
import { routesRef, bussesRef } from '../api/firebase';
import pointMark from '../assets/point-marker.png';
import destMark from '../assets/destination-marker.png';

export default function Routedetails() {
  const { id } = useParams();
  const [viewport, setViewport] = useState({
    latitude: 36.206291,
    longitude: 44.008869,
    width: '100%',
    height: '250px',
    zoom: 11,
  });

  const [route, setRoute] = useState();

  useEffect(() => {
    getRoute(id).then((route) => {
      if (route) {
        _mapRef.current
          .getMap()
          .fitBounds([
            route.path.features[1].geometry.coordinates,
            route.path.features[2].geometry.coordinates,
          ]);
        setRoute(route);
      }
    });
  }, [id]);

  const _mapRef = useRef();

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
  }, [_mapRef]);

  return (
    <div className="h-full flex flex-col">
      <ReactMapGL
        className="flex-grow"
        {...viewport}
        ref={_mapRef}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport({ ...viewport, width: '100%', height: '250px' });
        }}
        mapStyle="mapbox://styles/shna/ckd4x2xmy02kh1ir3hihcr36m"
      >
        {/* {route && (
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
        )} */}

        {/* Show Route */}

        {route && (
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
        )}
      </ReactMapGL>
      {route && (
        <div className="flex-grow-0 mx-auto shadow-xl mb-2">
          <BusInfoContainer route={route}></BusInfoContainer>
        </div>
      )}
    </div>
  );
}

async function getRoute(id) {
  if (window.isJest) return null;
  const document = await routesRef.doc(id).get();
  const route = document.data();
  const path = JSON.parse(route.path);
  const coordinates = path.geometry.coordinates;
  const start = {
    type: 'Feature',
    properties: { type: 'start' },
    geometry: {
      type: 'Point',
      coordinates: coordinates[0],
    },
  };
  const end = {
    type: 'Feature',
    properties: { type: 'end' },
    geometry: {
      type: 'Point',
      coordinates: coordinates[coordinates.length - 1],
    },
  };
  route.path = {
    type: 'FeatureCollection',
    features: [path, start, end],
  };

  route.buses = [];

  const busesDocs = await bussesRef.where('route_id', '==', id).get();

  busesDocs.forEach((doc) => {
    route.buses.push({ id: doc.id, ...doc.data() });
  });

  return route;
}
