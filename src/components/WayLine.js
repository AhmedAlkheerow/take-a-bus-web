import React from 'react';
import PropTypes from 'prop-types';

const WayLine = ({ way }) => {
  return (
    <table className="w-full table-auto mt-4">
      <thead align="center">
        <tr>
          <td colSpan={way.length.toString()}>
            <div className="border-2 border-primary border-dashed"></div>
          </td>
        </tr>
        <tr>
          {way.map((busStop, index, arr) => {
            if (index === 0)
              return (
                <td key={busStop.id}>
                  <div className="-my-4 flex">
                    <div className="flex-auto bg-white"> </div>
                    <div className="flex-initial rounded-full border-4 border-primary bg-white h-6 w-6"></div>
                    <div className="flex-auto"></div>
                  </div>
                </td>
              );
            if (index === arr.length - 1)
              return (
                <td key={busStop.id}>
                  <div className="-my-4 flex">
                    <div className="flex-auto"> </div>
                    <div className="flex-initial rounded-full border-4 border-red-500 bg-white h-6 w-6"></div>
                    <div className="flex-auto bg-white"></div>
                  </div>
                </td>
              );
            return (
              <td key={busStop.id}>
                <div className="-my-3 rounded-full border border-gray-500 bg-white h-4 w-4"></div>
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody align="center">
        <tr>
          {way.map((busStop) => (
            <td key={busStop.id} className="pt-2 text-xs">
              {busStop.name}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
WayLine.propTypes = {
  way: PropTypes.array,
};
export default WayLine;
