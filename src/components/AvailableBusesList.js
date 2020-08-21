import React, { useState } from 'react';
import BusNumber from './BusNumber';
import ShiftTime from './ShiftTime';
import roadPath from './roadPath.svg';
export default function AvailableBusesList() {
  const [busInfo] = useState([
    { id: 1, busNo: 473824, startTime: '11:00 AM', endTime: '03:00 PM' },
    { id: 2, busNo: 374674, startTime: '01:00 PM', endTime: '07:00 PM' },
    { id: 3, busNo: 637848, startTime: '03:00 PM', endTime: '09:00 PM' },
    { id: 4, busNo: 374674, startTime: '07:00 PM', endTime: '09:00 PM' },
    { id: 5, busNo: 877363, startTime: '06:00 AM', endTime: '04:00 PM' },
    { id: 6, busNo: 862113, startTime: '08:00 AM', endTime: '06:00 PM' },
  ]);
  return (
    <div>
      <div
        className="text-center w-full px-4 py-3  bg-gray-600 text-white font-extrabold shadow-md text-xl"
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
          {busInfo.map((bus) => (
            <tr key={bus.id}>
              <BusNumber bus={bus} />
              <td className="border-t px-4 py-2">
                <img src={roadPath} />
              </td>

              <ShiftTime bus={bus} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

{
  /* <tr>
  <td className="border-t px-4 py-2">JALAL ARIF JALAL ARIF</td>
  <td className="border-t px-4 py-2">JALAL ARIF JALAL ARIF</td>
  <td className="border-t px-4 py-2">JALAL ARIF JALAL ARIF</td>
</tr>; */
}
