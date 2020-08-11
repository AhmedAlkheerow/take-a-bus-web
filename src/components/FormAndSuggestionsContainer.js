import React, { useState } from 'react';
import FromDestinationForm from './FromDestinationForm';
import SuggestionsContainer from './SuggestionsContainer';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function FormAndSuggestionsContainer({
  RefFrom,
  RefDestination,
}) {
  const [searchFrom, setSearchFrom] = useState('');
  const [searchDestination, setSearchDestination] = useState('');

  function updateSearchForm(event) {
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

  return (
    <>
      <div className="boxshadow rounded-lg">
        <FromDestinationForm
          RefFrom={RefFrom}
          RefDestination={RefDestination}
          searchFrom={searchFrom}
          searchDestination={searchDestination}
          updateSearchForm={updateSearchForm}
          updateSearchDestination={updateSearchDestination}
          clearInputDestination={clearInputDestination}
          clearInputFrom={clearInputFrom}
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
FormAndSuggestionsContainer.propTypes = {
  RefFrom: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  RefDestination: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
