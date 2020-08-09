import React from 'react';
import PropTypes from 'prop-types';
import FbIcon from '../assets/fb-icon.png';
import GoogleIcon from '../assets/google-icon.png';

export default function FacebookGoogleBtn({ actionString }) {
  return (
    <div className="w-full px-2">
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
    <button
      aria-label="Facebook-Button"
      type="button"
      className="flex items-center rounded py-2 px-1 bg-blue-800 text-white hover:bg-blue-700 w-full mb-12"
    >
      <img src={FbIcon} className="w-10 mr-8 pl-2" alt="google logo" />
      <p>{actionString} with Facebook</p>
    </button>
  );
}

FacebookBtn.propTypes = {
  actionString: PropTypes.string.isRequired,
};

export function GoogleBtn({ actionString }) {
  return (
    <button
      aria-label="Google-Button"
      type="button"
      className="flex items-center rounded mt-2 py-2 bg-transparent text-black border-solid border-2 border-gray-500 hover:bg-gray-200 w-full"
    >
      <img src={GoogleIcon} className="w-8 mr-8 pl-2" alt="google logo" />
      <p className="px-4">{actionString} with Google</p>
    </button>
  );
}

GoogleBtn.propTypes = {
  actionString: PropTypes.string.isRequired,
};
