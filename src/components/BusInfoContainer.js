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

export default function BusInfoContainer({ dontShowTakeIt, fillHeart }) {
  const way = [
    { id: 0, isStart: true, name: '32 peak' },
    { id: 1, name: 'Italian Village' },
    { id: 2, name: 'Park View' },
    { id: 3, name: 'Naz Naz' },
    { id: 4, name: 'Empire' },
    { id: 5, name: 'Ankawa', isEnd: true },
  ];

  return (
    <div className="w-full">
      <div className="mt-4 p-2 w-full bg-gray-300 rounded-md flex justify-between">
        <div className="pl-12">
          <strong className="text-xl text-primary">
            Bus No. (473824 EBL - IRQ)
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
        <VerticalLineDivide />
        <div className="flex flex-col ml-2">
          <div className="text-gray-700 pl-1 pt-6">
            <h2>Work days: Saturday - Thusday</h2>
          </div>
        </div>
        {!dontShowTakeIt && (
          <div className="mr-8">
            <button
              aria-label="Took it"
              type="button"
              className="boxshadow btn btn-md primary font-semibold"
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
  dontShowTakeIt: PropTypes.bool.isRequired,
  fillHeart: PropTypes.bool.isRequired,
};
