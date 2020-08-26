import React, { useContext, useEffect } from 'react';
import SuggestionItem from './SuggestionItem';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import MapContext from '../providers/MapProvider';

// const suggestions = [
//   {
//     busNo: '473824 EBL - IRQ',
//     origin: 'Sami Abdulrahman',
//     destination: 'Erbil Citadel',
//     duration: '6:45 PM - 8:15 PM',
//     fastest: true,
//   },
//   {
//     busNo: '473824 EBL - IRQ',
//     origin: 'Sami Abdulrahman',
//     destination: 'Erbil Citadel',
//     duration: '6:45 PM - 8:15 PM',
//   },
//   {
//     busNo: '473824 EBL - IRQ',
//     origin: 'Sami Abdulrahman',
//     destination: 'Erbil Citadel',
//     duration: '6:45 PM - 8:15 PM',
//   },
//   {
//     busNo: '473824 EBL - IRQ',
//     origin: 'Sami Abdulrahman',
//     destination: 'Erbil Citadel',
//     duration: '6:45 PM - 8:15 PM',
//   },
//   {
//     busNo: '473824 EBL - IRQ',
//     origin: 'Sami Abdulrahman',
//     destination: 'Erbil Citadel',
//     duration: '6:45 PM - 8:15 PM',
//   },
//   {
//     busNo: '473824 EBL - IRQ',
//     origin: 'Sami Abdulrahman',
//     destination: 'Erbil Citadel',
//     duration: '6:45 PM - 8:15 PM',
//   },
//   {
//     busNo: '473824 EBL - IRQ',
//     origin: 'Sami Abdulrahman',
//     destination: 'Erbil Citadel',
//     duration: '6:45 PM - 8:15 PM',
//   },
// ];

export default function SuggestionContainer({ suggestions }) {
  let count = 0;
  const { setRoute } = useContext(MapContext);

  const onSuggestionClick = (route) => {
    setRoute(route.path);
  };

  useEffect(() => {
    setRoute(suggestions[0]);
  }, [setRoute, suggestions]);

  return (
    <>
      {suggestions.length > 0 &&
        suggestions[0].buses.map((s, idx) => {
          count += 0.1;
          return (
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.2,
                delay: count,
                type: 'spring',
                damping: 300,
              }}
              key={idx}
            >
              <motion.div
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 1 }}
                onClick={() => onSuggestionClick(suggestions)}
              >
                <SuggestionItem
                  {...s}
                  fastest={idx === 0 ? true : null}
                  originToBusDistance={
                    suggestions[0].walking.originToBus.distance
                  }
                  originToBusTime={suggestions[0].walking.originToBus.time}
                  tripDistance={suggestions[0].tripDistance}
                  tripEST={suggestions[0].tripEST}
                />
              </motion.div>
            </motion.div>
          );
        })}
    </>
  );
}

SuggestionContainer.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object),
};
