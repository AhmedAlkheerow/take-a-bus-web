import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import WayLine from './WayLine';
import BusIcon from '../assets/icon-bus.svg';
import WifiIcon from '../assets/icon-wifi.svg';
import BatteryIcon from '../assets/icon-battery.svg';
import AirConditionerIcon from '../assets/icon-ac.svg';
import BusInformations from './BusInformations';
import VerticalLineDivide from './VerticalLineDivide';
import PropTypes from 'prop-types';

export default function BusInfoContainer({
  route = {},
  dontShowTakeIt,
  fillHeart,
}) {
  const { way = [], bus = { working_hours: ' ', working_days: [] } } = route;
  const time = bus.working_hours[0]
    .split('-')
    .map((time) => time.substr(0, 2) + ':' + time.substr(2))
    .join('  -  ');
  return (
    <div className="w-full">
      <div className="mt-4 p-2 w-full bg-gray-300 rounded-md flex justify-between">
        <div className="pl-12">
          <strong className="text-xl text-primary">
            Bus No. ({bus.plate_number} EBL - IRQ)
          </strong>
        </div>
        <div className="pr-10">
          {!fillHeart ? (
            <button>
              <FiHeart className="w-8 h-8 text-red-600" />
            </button>
          ) : (
            <button>
              <AiFillHeart className="w-8 h-8 text-red-600" />
            </button>
          )}
        </div>
      </div>
      <div className="mt-4 p-2">
        <h3 className="pl-12 text-lg font-semibold">Route way: </h3>
      </div>
      <div className="mt-4 ml-16">
        <WayLine way={way} />
      </div>
      <hr className="border-b-4 border-gray-400 w-11/12 mx-auto mt-6" />
      <div className="mt-4 p-2">
        <h3 className="pl-12 text-lg font-semibold">Informations: </h3>
      </div>

      <div className="w-full flex">
        <div className="mt-4 flex flex-col items-center mx-8">
          <div className="w-24">
            <img alt="bus icon" src={BusIcon} />
          </div>
          <div className="text-gray-700 pl-2 pt-2">{time}</div>
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
          <BusInformations time={time} />
        </div>
        <VerticalLineDivide />
        <div className="flex flex-col ml-2">
          <div className="text-gray-700 pl-1 pt-6">
            <h2>Work days: {bus.working_days.join(', ')}.</h2>
          </div>
        </div>
        {!dontShowTakeIt && (
          <div className="mr-8">
            <button
              aria-label="Took it"
              type="button"
              className="boxshadow btn btn-md primary font-semibold ml-40 mt-16"
            >
              Took it
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
BusInfoContainer.propTypes = {
  route: PropTypes.node,
  dontShowTakeIt: PropTypes.bool.isRequired,
  fillHeart: PropTypes.bool.isRequired,
};
