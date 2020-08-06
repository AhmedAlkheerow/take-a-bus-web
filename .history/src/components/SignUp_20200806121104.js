import React from 'react';
import RedXBtn from './RedXBtn';
import OrSeperator from './OrSeperator';
import FacebookGoogleBtn from './FacebookGoogleBtn';
export default function SignUp() {
  const actionString = 'Sign Up';
  return (
    <div className="container mx-auto md:grid md:grid-cols-4 sm:flex sm:flex-col bg-white my-32 rounded-lg">
      <div className="col-span-4 flex flex-row-reverse">
        <RedXBtn />
      </div>
      <div className="col-span-2 flex flex-col justify-center xl:ml-10 xl:mt-12 lg:ml-6 md:ml-1 sm:mt-12">
        <div>
          <h1 className="text-2xl font-bold pb-4">Sign Up Now</h1>
        </div>
        <form>
          <div className="flex justify-between">
            <div className="w-1/2 mr-1">
              <input
                className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
                aria-label="First-Name"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="w-1/2 ml-1">
              <input
                className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
                aria-label="Last-Name"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div>
            <input
              className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
              aria-label="Email-Address"
              type="text"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
              aria-label="Create-Password"
              type="password"
              placeholder="Create Password"
              required
            />
          </div>
          <div className="mt-20">
            <button
              aria-label="Register"
              type="submit"
              className="btn-sm btn primary"
            >
              Register
            </button>
          </div>
          <div className="pt-2">
            <h3>
              Already a Member?
              <a href="#" className="text-primary mt-2">
                Login
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
