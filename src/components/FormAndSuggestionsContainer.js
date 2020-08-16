import React from 'react';
import FromDestinationForm from './FromDestinationForm';
import SuggestionsContainer from './SuggestionsContainer';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
export default function FormAndSuggestionsContainer({
  RefFrom,
  RefDestination,
  showResults,
}) {
  return (
    <>
      <div className="boxshadow rounded-lg">
        <FromDestinationForm
          RefFrom={RefFrom}
          RefDestination={RefDestination}
        />
        {showResults && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
            className="rounded-sm bg-gray-600 h-12 -mt-2 z-0"
          >
            <h2 className="text-white py-3 px-5 ">Available Routes</h2>
          </motion.div>
        )}
        {showResults && <SuggestionsContainer />}
      </div>
    </>
  );
}
FormAndSuggestionsContainer.propTypes = {
  RefFrom: PropTypes.object.isRequired,
  RefDestination: PropTypes.object.isRequired,
  showResults: PropTypes.bool.isRequired,
};
