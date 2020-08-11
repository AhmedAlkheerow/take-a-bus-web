import React, { useRef } from 'react';
import Map from '../components/MapContainer';
import FormAndSuggestionsContainer from '../components/FormAndSuggestionsContainer';
export default function Home() {
  const RefFrom = useRef();
  const RefDestination = useRef();

  return (
    <>
      <div className="absolute z-10 rounded-lg bg-white">
        <FormAndSuggestionsContainer
          RefFrom={RefFrom}
          RefDestination={RefDestination}
        />
      </div>
      <Map RefFrom={RefFrom} RefDestination={RefDestination} />
    </>
  );
}
