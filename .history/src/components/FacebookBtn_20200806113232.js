import React from 'react';
import FbIcon from '../assets/fb-icon.png';
import PropTypes from 'prop-types';

export default function FacebookBtn({ actionString }) {
  return (
    <div>
      <div className="mb-8">
        <button
          aria-label="Facebook Button"
          type="button"
          className="flex items-center btn btn-darkBlue md:w-full sm:w-auto sm:pr-5"
        >
          <img
            src={FbIcon}
            className="lg:w-8 md:w-20 sm:w-12 md:px-0 sm:px-2"
            alt="google logo"
          />
          <p className="lg:px-4 md:px-0">{actionString} with Facebook</p>
        </button>
      </div>
    </div>
  );
}

FacebookBtn.propTypes = {
  actionString: PropTypes.string.isRequired,
};
