import React from 'react';
import BusIcon from '../assets/icon-bus.svg';
import WifiIcon from '../assets/icon-wifi.svg';
import BatteryIcon from '../assets/icon-battery.svg';
import AirConditionerIcon from '../assets/icon-ac.svg';
import BusInformations from './BusInformations';
import VerticalLineDivide from './VerticalLineDivide';
import BusNumberHeader from './BusNumberHeader';
import Walking from '../assets/Walking.png';
import Trip from '../assets/Trip.png';
// import PropTypes from 'prop-types';

export default function BusDetailPopUp() {
  // const originToBusDistance = tripInfo[0].walking.originToBus.distance;
  // const originToBusTime = tripInfo[0].walking.originToBus.time;
  // const tripDistance = tripInfo[0].tripDistance;
  // const tripEST = tripInfo[0].tripEST;

  return (
    <div className="w-1/3 rounded-md">
      <BusNumberHeader />
      <div className="mt-4 p-2">
        <h3 className="pl-8 text-lg font-semibold">Time and Distance: </h3>
      </div>
      <div className="mt-4 flex">
        <div className="flex ml-10">
          <div>
            <img
              className="w-12 fill-current text-primary"
              src={Walking}
              alt="Walking png"
            />
          </div>
          <div className="ml-5 mt-2">
            <p className="font-semibold">
              {/* {originToBusDistance.toFixed(1)} */}
              <span className="text-gray-500 text-sm font-semibold"> min</span>
            </p>
            <p className="font-semibold">
              {/* {originToBusTime.toFixed(1)} */}
              <span className="text-gray-500 text-sm font-semibold"> Km</span>
            </p>
          </div>
        </div>
        <div className="flex mt-2 ml-56">
          <div>
            <img
              className="w-12 fill-current text-primary"
              src={Trip}
              alt="Walking png"
            />
          </div>
          <div className="ml-5">
            <p className="font-semibold">
              {/* {tripDistance.toFixed(1)} */}
              <span className="text-gray-500 text-sm font-semibold"> min</span>
            </p>
            <p className="font-semibold">
              {/* {tripEST.toFixed(1)} */}
              <span className="text-gray-500 text-sm font-semibold"> Km</span>
            </p>
          </div>
        </div>
      </div>
      <hr className=" border-b-2 border-gray-400 w-11/12 mx-auto mt-4" />
      <div className="mt-4 p-2">
        <h3 className="pl-8 text-lg font-semibold">Informations: </h3>
      </div>
      <div className="w-full flex">
        <div className="mt-4 flex flex-col items-center mx-8">
          <div className="w-24">
            <img alt="bus icon" src={BusIcon} />
          </div>
          <div className="text-gray-700 pl-2 pt-2">6:22 PM - 7:09 PM</div>
          <div className="flex justify-center my-2">
            <div className="w-6">
              <img alt="Wifi available" src={WifiIcon} />
            </div>
            <div className="ml-2 w-5">
              <img alt="Charger available" src={BatteryIcon} />
            </div>
            <div className="ml-2 w-6">
              <img alt="Air conditioning available" src={AirConditionerIcon} />
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

// BusDetailPopUp.propTypes = {
//   tripInfo: PropTypes.array.isRequired,
// };
