import React from 'react';
import BusIcon from '../assets/icon-bus.svg';
import WifiIcon from '../assets/icon-wifi.svg';
import BatteryIcon from '../assets/icon-battery.svg';
import AirConditionerIcon from '../assets/icon-ac.svg';
import BusInformations from './BusInformations';
import VerticalLineDivide from './VerticalLineDivide';
import BusNumberHeader from './BusNumberHeader';

export default function BusDetailPopUp() {
  return (
    <div className="w-1/3 rounded-md">
      <BusNumberHeader />
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
        <div className="mt-4 flex flex-col items-center mx-8">
          <div className="w-24">
            <img role="icon" alt="bus icon" src={BusIcon} />
          </div>
          <div className="text-gray-700 pl-2 pt-2">6:22 PM - 7:09 PM</div>
          <div className="flex justify-center my-2">
            <div className="w-6">
              <img role="icon" alt="Wifi available" src={WifiIcon} />
            </div>
            <div className="ml-2 w-5">
              <img role="icon" alt="Charger available" src={BatteryIcon} />
            </div>
            <div className="ml-2 w-6">
              <img
                role="icon"
                alt="Air conditioning available"
                src={AirConditionerIcon}
              />
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
