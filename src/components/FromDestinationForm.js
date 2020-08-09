import React from 'react';
import PropTypes from 'prop-types';

export default function FromDestinationForm({
  searchFrom,
  searchDestination,
  updateSearchForm,
  updateSearchDestination,
}) {
  return (
    <div>
      <form className="flex justify-between bg-dblue shadow-md rounded-lg px-5 pt-3 pb-8">
        <div>
          <label className="text-white font-medium mb-1" htmlFor="from-input">
            From:
          </label>
          <input
            value={searchFrom}
            onChange={updateSearchForm}
            className="w-11/12 border border-gray-500 rounded-xl py-1 px-1 leading-3 text-sm focus:outline-none focus:shadow-outline"
            id="from-input"
            type="text"
            placeholder="Choose a location"
          />
        </div>
        <div>
          <label className="text-white font-medium mb-1" htmlFor="to-input">
            To:
          </label>
          <input
            value={searchDestination}
            onChange={updateSearchDestination}
            className="w-11/12 border border-gray-500 rounded-xl py-1 px-3 leading-3 text-sm focus:outline-none focus:shadow-outline"
            id="to-input"
            type="text"
            placeholder="Destination"
          />
        </div>
      </form>
    </div>
  );
}

FromDestinationForm.propTypes = {
  searchFrom: PropTypes.string.isRequired,
  searchDestination: PropTypes.string.isRequired,
  updateSearchForm: PropTypes.func.isRequired,
  updateSearchDestination: PropTypes.func.isRequired,
};
