import React, { useState } from 'react';
import FromDestinationForm from './FromDestinationForm';
import SuggestionsContainer from './SuggestionsContainer';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function FormAndSuggestionsContainer({
  RefFrom,
  RefDestination,
  searchFrom,
  searchDestination,
  updateSearchForm,
  updateSearchDestination,
  // clearInputDestination,
  // clearInputFrom,
}) {
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
          // clearInputDestination={clearInputDestination}
          // clearInputFrom={clearInputFrom}
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
  searchFrom: PropTypes.string.isRequired,
  searchDestination: PropTypes.string.isRequired,
  updateSearchForm: PropTypes.func.isRequired,
  updateSearchDestination: PropTypes.func.isRequired,
  // clearInputFrom: PropTypes.func.isRequired,
  // clearInputDestination: PropTypes.func.isRequired,
  RefFrom: PropTypes.object.isRequired,
  RefDestination: PropTypes.object.isRequired,
};
