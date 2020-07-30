import React from 'react';

export default function FromDestinationForm() {
  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2">
      <form className="flex flex-row bg-blue-400 shadow-md rounded-lg px-6 py-4 mt-4">
        <div className="my-4 mr-1 w-full">
          <label
            className="block text-white font-bold mb-2 text-base"
            htmlFor="From"
          >
            From:
          </label>
          <input
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="From"
            type="text"
            placeholder="Choose a Location"
          />
        </div>
        <div className="my-4 ml-1 w-full">
          <label
            className="block text-white font-bold mb-2 text-base"
            htmlFor="To"
          >
            To:
          </label>
          <input
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="To"
            type="text"
            placeholder="Destination"
          />
        </div>
      </form>
    </div>
  );
}
