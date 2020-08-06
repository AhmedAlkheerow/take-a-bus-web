import React from 'react';
import SuggestionItem from './SuggestionItem';

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
  return (
    <div className="w-1/3">
      {suggestions.map((s, idx) => (
        <SuggestionItem {...s} key={idx} />
      ))}
    </div>
  );
}
