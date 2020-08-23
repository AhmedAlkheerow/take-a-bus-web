import React from 'react';
// import Map from '../components/MapContainer';
import FormAndSuggestionsContainer from '../components/FormAndSuggestionsContainer';
import { MapProvider } from '../providers/MapProvider';

export default function Home() {
  return (
    <MapProvider>
      <div className="absolute z-10 inset-y-0">
        <FormAndSuggestionsContainer />
      </div>
    </MapProvider>
  );
}
