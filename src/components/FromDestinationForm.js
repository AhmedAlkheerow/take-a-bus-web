import React from 'react';
import PropTypes from 'prop-types';
// import { FaTimes } from 'react-icons/fa';
export default function FromDestinationForm({
  // searchFrom,
  // searchDestination,
  // updateSearchForm,
  // updateSearchDestination,
  // clearInputFrom,
  // clearInputDestination,
  RefFrom,
  RefDestination,
}) {
  return (
    <form className="flex justify-between bg-dblue shadow-md rounded-lg px-5 pt-3 pb-8">
      <div>
        <label className="text-white font-medium mb-1" htmlFor="from-input">
          From:
        </label>
        <div className="relative">
          <div className="py-1" ref={RefFrom} />
          {/* <input
              value={searchFrom}
              onChange={updateSearchForm}
              className="w-full border border-gray-500 rounded-xl py-1 px-1 leading-3 text-sm focus:outline-none focus:shadow-outline"
              id="from-input"
              type="text"
              placeholder="Choose a location"
            /> */}
          {/* {searchFrom && (
            <button
              onClick={clearInputFrom}
              className="absolute left-0 top-0 focus:outline-none ml-9.8rem mt-0.35rem"
            >
              <FaTimes className=" text-gray-500 " />
            </button>
          )} */}
        </div>
      </div>
      <div>
        <label className="text-white font-medium mb-1" htmlFor="to-input">
          To:
        </label>
        <div className="relative ml-1">
          <div className="py-1" ref={RefDestination} />
          {/* <input
              value={searchDestination}
              onChange={updateSearchDestination}
              className="w-11/12 border border-gray-500 rounded-xl py-1 px-3 leading-3 text-sm focus:outline-none focus:shadow-outline"
              id="to-input"
              type="text"
              placeholder="Destination"
            /> */}
          {/* {searchDestination && (
            <button
              onClick={clearInputDestination}
              className="absolute rigt-0 top-0 -ml-6 focus:outline-none mt-0.35rem"
            >
              <FaTimes className=" text-gray-500 " />
            </button>
          )} */}
        </div>
      </div>
    </form>
  );
}

FromDestinationForm.propTypes = {
  searchFrom: PropTypes.string.isRequired,
  searchDestination: PropTypes.string.isRequired,
  updateSearchForm: PropTypes.func.isRequired,
  updateSearchDestination: PropTypes.func.isRequired,
  clearInputFrom: PropTypes.func.isRequired,
  clearInputDestination: PropTypes.func.isRequired,
  RefFrom: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  RefDestination: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
