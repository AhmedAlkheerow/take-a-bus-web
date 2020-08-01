import React from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './animateProvider';
export default function Progress() {
  return (
    <div className="bg-blue-100 ">
      <div className="border-b w-2/5 m-auto  mt-16 pt-10 text-center">
        <h1 className="font-bold text-5xl "> Who use Take a Bus?</h1>
      </div>

      <div className=" grid grid-cols-3  py-20 ">
        <div className="w-64 mx-auto">
          <ChangingProgressProvider values={[0, 20, 40, 70]}>
            {(percentage) => (
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={5}
                styles={buildStyles({
                  pathColor: `rgba(24, 160, 251)`,
                })}
              >
                <div>
                  <strong className=" progress-bar ">+{percentage}%</strong>
                </div>
                <strong className=" progress-bar ">New User</strong>
              </CircularProgressbarWithChildren>
            )}
          </ChangingProgressProvider>
        </div>

        <div className="w-64 mx-auto">
          <ChangingProgressProvider values={[0, 20, 40, 70, 85]}>
            {(percentage) => (
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={5}
                styles={buildStyles({
                  pathColor: `rgba(24, 160, 251)`,
                })}
              >
                <div>
                  <strong className=" progress-bar ">+{percentage}%</strong>
                </div>
                <strong className=" progress-bar ">Happy User</strong>
              </CircularProgressbarWithChildren>
            )}
          </ChangingProgressProvider>
        </div>
        <div className="w-64 mx-auto">
          <ChangingProgressProvider values={[0, 10, 20, 25]}>
            {(percentage) => (
              <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={5}
                styles={buildStyles({
                  pathColor: `rgba(24, 160, 251)`,
                })}
              >
                <div>
                  <strong className=" progress-bar ">+{percentage}%</strong>
                </div>
                <strong className=" progress-bar ">People use</strong>
                <strong className=" progress-bar ">this</strong>
              </CircularProgressbarWithChildren>
            )}
          </ChangingProgressProvider>
        </div>
      </div>
    </div>
  );
}
