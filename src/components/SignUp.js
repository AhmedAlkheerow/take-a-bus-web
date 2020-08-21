import React, { useRef, useEffect, useContext } from 'react';
import RedXBtn from './RedXBtn';
import OrSeperator from './OrSeperator';
import FacebookGoogleBtn from './FacebookGoogleBtn';
import PropTypes from 'prop-types';
import AuthContext from '../providers/AuthProvider';
export default function SignUp({ onClose }) {
  const actionString = 'Sign Up';
  const formRef = useRef();

  const { user, signUp, authInProgress, authError } = useContext(AuthContext);

  useEffect(() => {
    if (user) onClose();
  }, [user, onClose]);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = new FormData(formRef.current);

    signUp(
      form.get('email'),
      form.get('password'),
      `${form.get('firstName')} ${form.get('lastName')}`
    );
  };

  return (
    <div className="container relative grid grid-cols-12 bg-white my-32 rounded-lg pt-16">
      <div className="col-span-6 flex flex-col pl-10 my-auto">
        <div>
          <h1 className="text-2xl font-bold pb-4">Sign Up Now</h1>
        </div>
        <form ref={formRef} onSubmit={handleSignup}>
          <div className="text-xs text-red-500">
            {authError ? authError.message : ''}
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 mr-1">
              <input
                className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
                aria-label="First-Name"
                type="text"
                placeholder="First Name"
                name="firstName"
                required
              />
            </div>
            <div className="w-1/2 ml-1">
              <input
                className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
                aria-label="Last-Name"
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div>
            <input
              className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
              aria-label="Email-Address"
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
              aria-label="Account Password"
              name="password"
              type="password"
              placeholder="Account Password"
              required
            />
          </div>
          <div className="mt-8">
            <input
              aria-label="Register"
              type="submit"
              className="btn-md btn primary boxshadow"
              // onClick={handleSignup}
              value={authInProgress ? '...' : 'Register'}
              disabled={authInProgress}
            />
          </div>
          <div className="py-6">
            <p className="text-sm">
              Already a Member?&nbsp;
              <a href="#login" className="text-primary">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="col-span-1 flex justify-end">
        <OrSeperator />
      </div>
      <div className="col-span-5 flex flex-col w-100 justify-center items-start px-5">
        <FacebookGoogleBtn actionString={actionString} />
        <div className="absolute right-0 top-0">
          <RedXBtn onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
SignUp.propTypes = {
  onClose: PropTypes.func,
};
