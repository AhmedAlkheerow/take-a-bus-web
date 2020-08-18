import React from 'react';
import bus from '../../assets/bus-g.png';
import gradient from '../../assets/gradient.svg';
import wave from '../../assets/wave.svg';

export default function Header() {
  return (
    <>
      <div className="relative h-full">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${gradient})` }}
        />
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${wave})` }}
        />

        <div className="absolute right-0 bottom-0">
          <img src={bus} alt="take a bus pic" className="w-full h-full" />
        </div>
        <div className="absolute">
          <div className="text-center font-bold ml-32 mt-32">
            <p className="text-base text-6xl">Take a Bus Now</p>
            <p className="text-base text-2xl font-medium">
              We are always here for you
            </p>
            <button className="btn primary my-6 boxshadow text-2xl w-56 font-bold h-16">
              FIND A BUS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
