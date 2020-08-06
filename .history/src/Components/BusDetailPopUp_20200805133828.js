import React from 'react';

export default function BusDetailPopUp() {
  return (
    <div className="w-1/3 rounded-md bg-gray-100">
      <div className="mt-4 p-2 w-full bg-gray-300 rounded-md">
        <strong className="pl-8 text-xl text-blue-500">
          Bus No. (473824 EBL - IRQ)
        </strong>
      </div>
      <div className="mt-4 p-2">
        <h3 className="pl-8 text-lg font-semibold">Route way: </h3>
      </div>
      <hr className=" border-b-2 border-gray-200" />
      <div className="mt-4 p-2">
        <h3 className="pl-8 text-lg font-semibold">Informations: </h3>
      </div>
    </div>
  );
}
