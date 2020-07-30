import React from 'react';
import '../../tailwind.css';
import SuggestionItem from './SuggestionItem';
import BreakLine from '../BreakLine';

export default function SuggestionContainer() {
  return (
    <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 ">
      <SuggestionItem
        busNo="473824 EBL - IRQ"
        origin="Sami Abdulrahman"
        destination="Erbil Citadel"
        duration="6:45 PM - 8:15 PM"
      />
      <BreakLine />
      <SuggestionItem
        busNo="473824 EBL - IRQ"
        origin="Sami Abdulrahman"
        destination="Erbil Citadel"
        duration="6:45 PM - 8:15 PM"
      />
      <BreakLine />
      <SuggestionItem
        busNo="473824 EBL - IRQ"
        origin="Sami Abdulrahman"
        destination="Erbil Citadel"
        duration="6:45 PM - 8:15 PM"
      />
      <BreakLine />
      <SuggestionItem
        busNo="473824 EBL - IRQ"
        origin="Sami Abdulrahman"
        destination="Erbil Citadel"
        duration="6:45 PM - 8:15 PM"
      />
    </div>
  );
}
