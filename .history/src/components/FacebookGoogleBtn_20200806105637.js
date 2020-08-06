import React from 'react';
import PropTypes from 'prop-types';
import GoogleIcon from '../assets/google-icon.png';
import FacebookBtn from './FacebookBtn';

export default function FacebookGoogleBtn({ signingText }) {
  return (
    <div>
      <FacebookBtn />
      <div className="mt-4">
        <button
          type="button"
          className="flex items-center btn btn-TransparentBlue md:w-full sm:w-auto sm:pr-8"
        >
          <img
            src={GoogleIcon}
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
