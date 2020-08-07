import React from 'react';

export default function AvailableBusesList() {
  return (
    <div>
      <div
        className="text-center w-full px-4 py-4  bg-gray-600 text-white font-extrabold shadow-md text-2xl"
        style={{ backgroundColor: '#A1A1A1' }}
      >
        Available Buses
      </div>
      <table className="table-fixed w-full shadow-md text-center  rounded-lg ">
        <thead className=" w-full">
          <tr>
            <th className=" px-4 py-3 ">Bus No</th>
            <th className=" px-4 py-3">Destination</th>
            <th className=" px-4 py-3">Shift Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-t px-4 py-2">JALAL ARIF JALAL ARIF</td>
            <td className="border-t px-4 py-2">JALAL ARIF JALAL ARIF</td>
            <td className="border-t px-4 py-2">JALAL ARIF JALAL ARIF</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
