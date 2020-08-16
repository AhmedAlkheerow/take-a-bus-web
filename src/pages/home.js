import React, { useRef, useState } from 'react';
import Map from '../components/MapContainer';
import FormAndSuggestionsContainer from '../components/FormAndSuggestionsContainer';

export default function Home() {
  const RefFrom = useRef();
  const RefDestination = useRef();
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <div className="absolute z-10 rounded-lg bg-white">
        <FormAndSuggestionsContainer
          RefFrom={RefFrom}
          RefDestination={RefDestination}
          showResults={showResults}
        />
      </div>
      <Map
        RefFrom={RefFrom}
        RefDestination={RefDestination}
        setShowResults={setShowResults}
      />
    </>
  );
}
