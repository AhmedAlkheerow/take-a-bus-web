import React from 'react';
import GoogleIcon from '../assets/google-icon.png';
import PropTypes from 'prop-types';

export default function GoogleBtn({ actionString }) {
  return (
    <div>
      <div className="mt-4">
        <button
          aria-label="Google-Button"
          type="button"
          className="flex items-center rounded-lg py-2 px-2 bg-transparent text-black border-solid border-2 border-gray-500 hover:bg-gray-200 md:w-full sm:w-auto sm:pr-8"
        >
          <img
            src={GoogleIcon}
            className="lg:w-8 md:w-12 sm:w-12 md:px-0 sm:px-2"
            alt="google logo"
          />
          <p className="lg:px-4 md:px-0">{actionString} with Google</p>
        </button>
      </div>
    </div>
  );
}

GoogleBtn.propTypes = {
  actionString: PropTypes.string.isRequired,
};
