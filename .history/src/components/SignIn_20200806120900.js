import React from 'react';
import RedXBtn from './RedXBtn';
import OrSeperator from './OrSeperator';
import FacebookGoogleBtn from './FacebookGoogleBtn';

export default function SignIn() {
  const actionString = 'Login';
  return (
    <div className="container mx-auto md:grid md:grid-cols-4 sm:flex sm:flex-col bg-white my-32 rounded-lg">
      <div className="col-span-4 flex flex-row-reverse">
        <RedXBtn />
      </div>
      <div className="col-span-2 flex flex-col justify-center xl:ml-10 xl:mt-12 lg:ml-6 md:ml-1 sm:mt-12">
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
            <a href="#" className="mt-2">
              Forgot Password?
            </a>
          </div>
          <div className="py-2">
            <button
              aria-label="Login"
              type="submit"
              className="btn-md btn primary"
            >
              Login
            </button>
          </div>
          <div className="pt-2">
            <h3>
              Not on Take a Bus yet?
              <a href="#" className="text-primary mt-2">
                Sign up
              </a>
            </h3>
          </div>
        </form>
      </div>
      <div className="col-span-1 flex justify-center py-12">
        <OrSeperator />
      </div>
      <div className="flex flex-col justify-center xl:my-12 xl:mr-10 lg:mr-0 md:mr-1 sm:mx-auto">
        <FacebookGoogleBtn actionString={actionString} />
      </div>
    </div>
  );
}
