import React from 'react';
import PropTypes from 'prop-types';

import FacebookBtn from './FacebookBtn';
import GoogleBtn from './GoogleBtn';

export default function FacebookGoogleBtn({ actionString }) {
  return (
    <div>
      <FacebookBtn />
      <GoogleBtn />
    </div>
  );
}

FacebookGoogleBtn.propTypes = {
  signingText: PropTypes.string.isRequired,
};
