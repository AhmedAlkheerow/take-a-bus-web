import React, { useState } from 'react';
import FromDestinationForm from './FromDestinationForm';
import SuggestionsContainer from './SuggestionsContainer';
import { motion } from 'framer-motion';

export default function FormAndSuggestionsContainer() {
  const [searchFrom, setSearchFrom] = useState('');
  const [searchDestination, setSearchDestination] = useState('');

  function updateSearchFrom(event) {
    setSearchFrom(event.target.value);
  }

  function updateSearchDestination(event) {
    setSearchDestination(event.target.value);
  }

  function clearInputDestination(e) {
    e.preventDefault();
    setSearchDestination('');
  }
  function clearInputFrom(e) {
    e.preventDefault();
    setSearchFrom('');
  }

  const showSuggestions = searchFrom && searchDestination;

  return (
    <>
      <div className="flex flex-col h-full">
        <FromDestinationForm
          searchFrom={searchFrom}
          searchDestination={searchDestination}
          updateSearchFrom={updateSearchFrom}
          updateSearchDestination={updateSearchDestination}
          clearInputDestination={clearInputDestination}
          clearInputFrom={clearInputFrom}
        />
        {showSuggestions && (
          <>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1 }}
              className="bg-gray-600 h-12 -mt-2 z-10 boxshadow"
            >
              <h2 className="text-white py-3 px-5 ">Available Routes</h2>
            </motion.div>
            <div className="overflow-auto flex-grow boxshadow bg-white z-10 rounded-b-lg">
              <SuggestionsContainer />
            </div>
            <ShowMore />
          </>
        )}
      </div>
    </>
  );
}

const ShowMore = (props) => (
  <div
    {...props}
    className="flex justify-center font-medium text-sm mb-6  border-white text-primary z-10"
  >
    <div className="boxshadow px-4 py-2 rounded-b-lg bg-white">
      View More &gt;
    </div>
  </div>
);
