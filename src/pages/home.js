import React, { useRef, useState } from 'react';
import Map from '../components/MapContainer';
import FormAndSuggestionsContainer from '../components/FormAndSuggestionsContainer';
export default function Home() {
  const RefFrom = useRef();
  const RefDestination = useRef();

  const [searchFrom, setSearchFrom] = useState('');
  const [searchDestination, setSearchDestination] = useState('');

  function updateSearchForm(event) {
    setSearchFrom(event.target.value);
  }

  function updateSearchDestination(event) {
    setSearchDestination(event.target.value);
  }

  function clearInputDestination() {
    setSearchDestination('');
  }
  function clearInputFrom() {
    setSearchFrom('');
  }

  return (
    <>
      <div className="absolute z-10 rounded-lg bg-white">
        <FormAndSuggestionsContainer
          RefFrom={RefFrom}
          RefDestination={RefDestination}
          searchFrom={searchFrom}
          searchDestination={searchDestination}
          updateSearchForm={updateSearchForm}
          updateSearchDestination={updateSearchDestination}
          // clearInputDestination={clearInputDestination}
          // clearInputFrom={clearInputFrom}
        />
      </div>
      <Map
        RefFrom={RefFrom}
        RefDestination={RefDestination}
        clearInputDestination={clearInputDestination}
        clearInputFrom={clearInputFrom}
        searchFrom={searchFrom}
      />
    </>
  );
}
