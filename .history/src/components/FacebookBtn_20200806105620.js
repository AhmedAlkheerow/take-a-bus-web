import React from 'react';

export default function FacebookBtn() {
  return (
    <div>
      <div className="mb-8">
        <button
          type="button"
          className="flex items-center btn btn-darkBlue md:w-full sm:w-auto sm:pr-5"
        >
          <img
            src={FbIcon}
            className="lg:w-8 md:w-20 sm:w-12 md:px-0 sm:px-2"
            alt="google logo"
          />
          <p className="lg:px-4 md:px-0">{signingText} with Facebook</p>
        </button>
      </div>
    </div>
  );
}
