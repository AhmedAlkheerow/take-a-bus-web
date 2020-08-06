import React from 'react';

export default function GoogleBtn() {
  return (
    <div>
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
