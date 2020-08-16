import React from 'react';
import PropTypes from 'prop-types';
export default function FromDestinationForm({ RefFrom, RefDestination }) {
  return (
    <form className="flex justify-between bg-dblue shadow-md rounded-lg px-5 pt-3 pb-8">
      <div>
        <label className="text-white font-medium mb-1" htmlFor="from-input">
          From:
        </label>
        <div className="relative">
          <div className="py-1" ref={RefFrom} />
        </div>
      </div>

      <div>
        <label className="text-white font-medium mb-1" htmlFor="to-input">
          To:
        </label>
        <div className="relative ml-1">
          <div className="py-1" ref={RefDestination} />
        </div>
      </div>
    </form>
  );
}

FromDestinationForm.propTypes = {
  RefFrom: PropTypes.object.isRequired,
  RefDestination: PropTypes.object.isRequired,
};
