import React from 'react';
import bus from '../../assets/bus.png';

export default function Header() {
  return (
    <>
      <div>
        <svg
          viewBox="0 0 1440 214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-1"
        >
          <rect
            x="-102"
            width="1734"
            height="214"
            fill="url(#paint0_linear)"
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="765"
              y1="0"
              x2="765"
              y2="214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2298F1" />
              <stop offset="1" stopColor="#18A0FB" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1440 724"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-mt-8"
        >
          <path
            d="M771.156 184.15C1013.63 -57.0161 1396.23 62.6252 1445 0V723H-17.8598C-18.7816 723.39 -19.8256 723.397 -21 723H-17.8598C13.2564 709.837 -95.0504 260.703 -34.5005 224.783C27.8431 187.8 160.066 575.706 409.074 465.891C675.377 348.449 715.088 239.915 771.156 184.15Z"
            fill="#18A0FB"
            fillOpacity="0.3"
          />
        </svg>
        <div className="absolute right-0 top-0 header-bus">
          <img src={bus} alt="take a bus pic" className="w-full h-full" />
        </div>
      </div>

      <div className=" absolute top-0 mt-48 ml-40 font-bold">
        <p className="text-base text-6xl">Take a Bus Now</p>
        <p className="text-base text-2xl text-center font-medium">
          We are always here for you
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-medium py-2 px-10 rounded-lg ml-40 mt-5 boxshadow ">
          Find Bus
        </button>
      </div>
    </>
  );
}
