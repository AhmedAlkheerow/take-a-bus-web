import React, { useState } from 'react';
import FormDestinationForm from './FromDestinationForm';
import SuggestionsContainer from './SuggestionsContainer';
import { motion } from 'framer-motion';

export default function FormAndSuggestionsContainer() {
  const [searchFrom, setSearchFrom] = useState('');
  const [searchDestination, setSearchDestination] = useState('');

  function updateSearchForm(event) {
    setSearchFrom(event.target.value);
  }

  function updateSearchDestination(event) {
    setSearchDestination(event.target.value);
  }

  return (
    <>
      <div className="w-1/4 boxshadow absolute z-10 rounded-lg bg-white">
        <FormDestinationForm
          searchFrom={searchFrom}
          searchDestination={searchDestination}
          updateSearchForm={updateSearchForm}
          updateSearchDestination={updateSearchDestination}
        />
        {searchFrom && searchDestination && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
            className="rounded-sm bg-gray-600 h-12 -mt-2 z-0"
          >
            <h2 className="text-white py-3 px-5 ">Available Routes</h2>
          </motion.div>
        )}
        {searchFrom && searchDestination && <SuggestionsContainer />}
      </div>
    </>
  );
}
