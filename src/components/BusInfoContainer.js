import React from 'react';
import { FiHeart } from 'react-icons/fi';
import WayLine from './WayLine';

export default function BusInfoContainer() {
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
          <FiHeart className="w-8 h-8 text-red-600" />
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
        <div className="mt-4 pl-8 flex flex-col ">
          <div>@todo BusIcon from bust detail pop up component</div>
          <div className="text-gray-700 pl-2 pt-2">6:22 PM - 7:09 PM</div>
          <div className="flex pl-8 py-2">
            <div>@todo WifiIcon from bust detail pop up component</div>
            <div className="pl-2">
              @todo BatteryIcon from bust detail pop up component
            </div>
            <div className="pl-2">
              @todo AirConditionerIcon from bust detail pop up component
            </div>
          </div>
        </div>
        @todo VerticalLine Component from bust detail pop up component
        <div className="flex flex-col ml-2">
          @todo BusInformations Component from bust detail pop up component
        </div>
        <div className="mr-8">
          <button
            aria-label="Took it"
            type="button"
            className="boxshadow btn btn-md primary font-semibold"
          >
            Took it
          </button>
        </div>
      </div>
    </div>
  );
}
