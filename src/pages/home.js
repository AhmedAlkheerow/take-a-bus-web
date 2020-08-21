import React from 'react';
import Map from '../components/MapContainer';
import FormAndSuggestionsContainer from '../components/FormAndSuggestionsContainer';
export default function home() {
  return (
    <>
      <div className="absolute z-10 inset-y-0">
        <FormAndSuggestionsContainer />
      </div>
      <Map />
    </>
  );
}
