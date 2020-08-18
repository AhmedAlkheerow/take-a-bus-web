import React from 'react';

import time from '../../assets/time.png';
import route from '../../assets/route.png';
import destination from '../../assets/destination.png';
import takeBus from '../../assets/takeBus.png';

export default function Service() {
  return (
    <>
      <div className="text-center">
        <div className="border-b w-2/5 m-auto mt-16">
          <h1 className="font-bold text-5xl "> What do we give you?</h1>
        </div>

        <div className="grid grid-cols-2 mt-16">
          <div className="grid grid-cols-2 mt-32">
            <div className="ml-56">
              <div className="absolute">
                <img src={time} alt="time" className="w-24 h-24 pl-2" />
              </div>
              <svg
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-10"
              >
                <path
                  d="M55 110C85.3757 110 110 85.3757 110 55C110 24.6243 85.3757 0 55 0C24.6243 0 0 24.6243 0 55C0 85.3757 24.6243 110 55 110Z"
                  fill="#18A0FB"
                  fillOpacity="0.2"
                />
              </svg>
              <div className="absolute">
                <img src={route} alt="time" className="w-24 h-24 pl-4" />
              </div>
              <svg
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-10"
              >
                <path
                  d="M55 110C85.3757 110 110 85.3757 110 55C110 24.6243 85.3757 0 55 0C24.6243 0 0 24.6243 0 55C0 85.3757 24.6243 110 55 110Z"
                  fill="#18A0FB"
                  fillOpacity="0.2"
                />
              </svg>
              <div className="absolute">
                <img src={destination} alt="time" className="w-24 h-24 pl-3" />
              </div>
              <svg
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55 110C85.3757 110 110 85.3757 110 55C110 24.6243 85.3757 0 55 0C24.6243 0 0 24.6243 0 55C0 85.3757 24.6243 110 55 110Z"
                  fill="#18A0FB"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
            <div className="text-left">
              <div className="mb-16">
                <p className="text-3xl">Check the time </p>
                <p>
                  You can go to the route time of the busses and check the best
                  time for you.
                </p>
              </div>
              <div className="mb-16">
                <p className="text-3xl">Check your route </p>
                <p>Choose the best route for you and for your travel</p>
              </div>
              <div>
                <p className="text-3xl">Get to your destination</p>
                <p>Go in the bus and get to your place and enjoy your time</p>
              </div>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 660 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M498.262 0.707928C563.512 -6.88223 604.769 48.4339 617.242 77.0408C631.957 93.8599 661.891 134.139 663.909 160.705C665.592 182.863 686.721 242.365 684.172 282.854C774.237 291.456 841.556 298.91 847.5 304.314C853.838 310.077 776.652 314.143 668.148 318.145C635.571 351.27 556.328 402.956 540.305 421.185C517.181 447.492 354.057 440.592 314.538 450.08C282.922 457.67 284.999 479 79.4994 465C-54.5015 363.5 9.48674 367.256 66.4986 352C136.511 333.265 459.97 325.823 668.148 318.145C673.181 313.028 677.1 308.354 679.5 304.314C682.22 298.209 683.664 290.908 684.172 282.854C493.952 264.688 202.265 241.404 173 221.5C-0.500214 103.5 416.7 10.1956 498.262 0.707928Z"
                fill="#18A0FB"
                fillOpacity="0.3"
              />
            </svg>
          </div>
          <div className="absolute right-0">
            <img src={takeBus} alt=" take a bus pic " className="service-pic" />
          </div>
        </div>
      </div>
    </>
  );
}
