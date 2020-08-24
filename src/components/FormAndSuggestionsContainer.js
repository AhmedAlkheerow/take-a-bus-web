import React, { useState } from 'react';
import FromDestinationForm from './FromDestinationForm';
import SuggestionsContainer from './SuggestionsContainer';
import { motion } from 'framer-motion';
export default function FormAndSuggestionsContainer() {
  const [results, setResults] = useState([]);
  const [fetching, setFetching] = useState(false);
  return (
    <>
      <div className="flex flex-col h-full">
        <FromDestinationForm setRoutes={setResults} setFetching={setFetching} />
        {(fetching || results.length > 0) && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
            className="bg-gray-600 h-12 -mt-2 z-10 boxshadow"
          >
            <h2 className="text-white py-3 px-5">
              {fetching ? 'Available' : 'Loading'} Routes
            </h2>
          </motion.div>
        )}
        {results.length > 0 && (
          <>
            <div className="overflow-auto flex-grow boxshadow bg-white z-10 rounded-b-lg">
              <SuggestionsContainer suggestions={results} />
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
