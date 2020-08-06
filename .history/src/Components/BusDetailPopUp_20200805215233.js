import React from 'react';
import BusIcon from './BusIcon';
import WifiIcon from './WifiIcon';
import BatteryIcon from './BatteryIcon';
import AirConditionerIcon from './AirConditionerIcon';
import BusInformations from './BusInformations';
import VerticalLineDivide from './VerticalLineDivide';

export default function BusDetailPopUp() {
  return (
    <div className="w-1/3 rounded-md">
      <div className="mt-4 p-2 w-full bg-gray-300 rounded-md">
        <strong className="pl-8 text-xl text-blue-color">
          Bus No. (473824 EBL - IRQ)
        </strong>
      </div>
      <div className="mt-4 p-2">
        <h3 className="pl-8 text-lg font-semibold">Route way: </h3>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-center">
          Route ways from ahmeds componenet
        </h3>
      </div>
      <hr className=" border-b-2 border-gray-400 w-11/12 mx-auto mt-4" />
      <div className="mt-4 p-2">
        <h3 className="pl-8 text-lg font-semibold">Informations: </h3>
      </div>
      <div className="w-full flex">
        <div className="mt-4 pl-8 flex flex-col ">
          <div>
            <BusIcon />
          </div>
          <div className="text-gray-700 pl-2 pt-2">6:22 PM - 7:09 PM</div>
          <div className="flex pl-8 py-2">
            <div>
              <WifiIcon />
            </div>
            <div className="pl-2">
              <BatteryIcon />
            </div>
            <div className="pl-2">
              <AirConditionerIcon />
            </div>
          </div>
        </div>
        <VerticalLineDivide />
        <div className="flex flex-col ml-2">
          <BusInformations />
        </div>
      </div>
    </div>
  );
}
