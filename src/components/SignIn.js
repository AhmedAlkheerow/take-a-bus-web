import React from 'react';
import RedXBtn from './RedXBtn';
import OrSeperator from './OrSeperator';
import FacebookGoogleBtn from './FacebookGoogleBtn';
import PropTypes from 'prop-types';
export default function SignIn({ handleClose }) {
  const actionString = 'Login';
  return (
    <div className="container relative grid grid-cols-12 bg-white my-32 rounded-lg">
      <div className="col-span-6 flex flex-col pl-10 my-auto">
        <div>
          <h1 className="text-2xl font-bold pb-4">Login Now</h1>
        </div>
        <form>
          <div>
            <input
              className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
              aria-label="Email Address"
              type="text"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
              aria-label="Password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-row-reverse">
            <a href="#forgetpass" className="mt-2">
              Forgot Password?
            </a>
          </div>
          <div>
            <button
              aria-label="Login"
              type="submit"
              className="btn-md btn primary boxshadow"
            >
              Login
            </button>
          </div>
          <div className="pt-6">
            <h3>
              Not on Take a Bus yet?
              <a href="#signup" className="text-primary mt-2">
                Sign up
              </a>
            </h3>
          </div>
        </form>
      </div>
      <div className="col-span-1 flex justify-end">
        <OrSeperator />
      </div>
      <div className="col-span-5 flex flex-col w-100 justify-center items-start px-5">
        <FacebookGoogleBtn actionString={actionString} />
        <div className="absolute right-0 top-0">
          <RedXBtn onClick={handleClose} />
        </div>
      </div>
    </div>
  );
}
SignIn.propTypes = {
  handleClose: PropTypes.func,
};
