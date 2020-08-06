import React from 'react';
import PropTypes from 'prop-types';
import googleIconn from '../assets/google-icon.png';
export default function FacebookGoogleBtn({ signingText }) {
  return (
    <div>
      <div className="mb-8">
        <button
          type="button"
          className="flex items-center btn btn-darkBlue md:w-full sm:w-auto sm:pr-5"
        >
          <img
            src={require('../assets/fb-icon.png')}
            className="lg:w-8 md:w-20 sm:w-12 md:px-0 sm:px-2"
            alt="google logo"
          />
          <p className="lg:px-4 md:px-0">{signingText} with Facebook</p>
        </button>
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="flex items-center btn btn-TransparentBlue md:w-full sm:w-auto sm:pr-8"
        >
          <img
            src={googleIconn}
            className="lg:w-8 md:w-12 sm:w-12 md:px-0 sm:px-2"
            alt="google logo"
          />
          <p className="lg:px-4 md:px-0">{signingText} with Google</p>
        </button>
      </div>
    </div>
  );
}

FacebookGoogleBtn.propTypes = {
  signingText: PropTypes.string.isRequired,
};
