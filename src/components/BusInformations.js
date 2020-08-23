import React from 'react';
import PropTypes from 'prop-types';

export default function BusInformations({ time }) {
  return (
    <div className="mr-8">
      <div className="text-gray-700 pl-1">
        <h2>No. Seats: 12 Seats</h2>
      </div>
      <div className="text-gray-700 pl-1">
        <h2>Date: 23/07/2020</h2>
      </div>
      <div className="text-gray-700 pl-1">
        <h2>Work time: {time}</h2>
      </div>
    </div>
  );
}

BusInformations.propTypes = {
  time: PropTypes.string,
};
