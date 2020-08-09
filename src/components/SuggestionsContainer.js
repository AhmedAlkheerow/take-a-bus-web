import React from 'react';
import SuggestionItem from './SuggestionItem';
import { motion } from 'framer-motion';

const suggestions = [
  {
    busNo: '473824 EBL - IRQ',
    origin: 'Sami Abdulrahman',
    destination: 'Erbil Citadel',
    duration: '6:45 PM - 8:15 PM',
    fastest: true,
  },
  {
    busNo: '473824 EBL - IRQ',
    origin: 'Sami Abdulrahman',
    destination: 'Erbil Citadel',
    duration: '6:45 PM - 8:15 PM',
  },
  {
    busNo: '473824 EBL - IRQ',
    origin: 'Sami Abdulrahman',
    destination: 'Erbil Citadel',
    duration: '6:45 PM - 8:15 PM',
  },
  {
    busNo: '473824 EBL - IRQ',
    origin: 'Sami Abdulrahman',
    destination: 'Erbil Citadel',
    duration: '6:45 PM - 8:15 PM',
  },
];

export default function SuggestionContainer() {
  let count = 0;
  return (
    <div className="">
      {suggestions.map((s, idx) => {
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
            <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 1 }}>
              <SuggestionItem {...s} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
