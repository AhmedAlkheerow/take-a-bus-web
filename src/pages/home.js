import React from 'react';
import Map from '../components/MapContainer';
import FormAndSuggestionsContainer from '../components/FormAndSuggestionsContainer';
export default function home() {
  return (
    <>
      <FormAndSuggestionsContainer />
      <Map />
    </>
  );
}
