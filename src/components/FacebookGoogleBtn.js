import React from 'react';
import PropTypes from 'prop-types';
import FbIcon from '../assets/fb-icon.png';
import GoogleIcon from '../assets/google-icon.png';

export default function FacebookGoogleBtn({ actionString }) {
  return (
    <div>
      <FacebookBtn actionString={actionString} />
      <GoogleBtn actionString={actionString} />
    </div>
  );
}

FacebookGoogleBtn.propTypes = {
  actionString: PropTypes.string.isRequired,
};

export function FacebookBtn({ actionString }) {
  return (
    <div>
      <div className="mb-8">
        <button
          aria-label="Facebook-Button"
          type="button"
          className="flex items-center md:w-full sm:w-auto sm:pr-5 rounded py-2 px-1 bg-blue-800 text-white hover:bg-blue-700"
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

export function GoogleBtn({ actionString }) {
  return (
    <div>
      <div className="mt-4">
        <button
          aria-label="Google-Button"
          type="button"
          className="flex items-center rounded py-2 px-1 bg-transparent text-black border-solid border-2 border-gray-500 hover:bg-gray-200 md:w-full sm:w-auto sm:pr-8"
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
