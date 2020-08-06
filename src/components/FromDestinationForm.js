import React from 'react';

export default function FromDestinationForm() {
  return (
    <div className="w-5/12">
      <form className="flex justify-between bg-dblue shadow-md rounded-lg px-5 pt-3 pb-8">
        <div>
          <label className="text-white font-medium mb-1" htmlFor="from-input">
            From:
          </label>
          <input
            className="w-11/12 border border-gray-500 rounded-xl py-1 px-2 leading-3 text-sm focus:outline-none focus:shadow-outline"
            id="from-input"
            type="text"
            placeholder="Choose a location"
          />
        </div>
        <div>
          <label className="text-white font-medium mb-1" htmlFor="to-input">
            To:
          </label>
          <input
            className="w-11/12 border border-gray-500 rounded-xl py-1 px-2 leading-3 text-sm focus:outline-none focus:shadow-outline"
            id="to-input"
            type="text"
            placeholder="Destination"
          />
        </div>
      </form>
    </div>
  );
}
