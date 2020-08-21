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
      <div className="flex flex-col h-full">
        <FromDestinationForm
          RefFrom={RefFrom}
          RefDestination={RefDestination}
        />
        {showResults && (
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
FormAndSuggestionsContainer.propTypes = {
  RefFrom: PropTypes.object.isRequired,
  RefDestination: PropTypes.object.isRequired,
  showResults: PropTypes.bool.isRequired,
};

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
