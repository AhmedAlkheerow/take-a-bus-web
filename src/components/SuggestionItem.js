import React from 'react';
import moment from 'moment/moment.js';
import Walking from '../assets/Walking.svg';
import Trip from '../assets/Trip.png';

export default function SuggestionItem(props) {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  const busNo = props.plate_number;
  // eslint-disable-next-line react/prop-types
  const plateRegion = props.plate_region;
  // eslint-disable-next-line react/prop-types
  const origin = props.origin || 'Citadel';
  // eslint-disable-next-line react/prop-types
  const destination = props.destination || 'Sami';
  // eslint-disable-next-line react/prop-types
  const duration = props.working_hours;
  // eslint-disable-next-line react/prop-types
  const fastest = props.fastest;
  // eslint-disable-next-line react/prop-types
  const originToBusDistance = props.originToBusDistance.toFixed(1);
  // eslint-disable-next-line react/prop-types
  const originToBusTime = props.originToBusTime.toFixed(1);
  // eslint-disable-next-line react/prop-types
  const tripDistance = props.tripDistance.toFixed(1);
  // eslint-disable-next-line react/prop-types
  const tripEST = props.tripEST.toFixed(1);

  const timeParse = (duration) => {
    if (duration) {
      // eslint-disable-next-line react/prop-types
      const timeFrom = duration[0].substring(0, 4);
      // eslint-disable-next-line react/prop-types
      const timeTo = duration[0].substring(4, 8);
      // eslint-disable-next-line react/prop-types
      return `
    ${moment(timeFrom, 'hhmm').format('HH:mm')}-${moment(timeTo, 'hhmm').format(
        'HH:mm'
      )}`;
    }
  };

  return (
    <>
      <div className="pt-6 px-6 pb-2">
        <div
          className="w-full flex justify-between items-baseline"
          data-testid="bus-no"
        >
          <span>
            <strong>Bus No.</strong> {`(${busNo} ${plateRegion} - IRQ)`}
          </span>
          {fastest && (
            <span className="text-right text-green-400 text-xs">
              Fastest Route
            </span>
          )}
        </div>
        <div className="flex justify-between items-center text-xs">
          <div data-testid="origin" className="font-semibold text-lg">
            {origin}
          </div>
          <div className="text-gray-600 ml-8 mr-6 mt-6">
            <svg
              width="143"
              height="30"
              viewBox="0 0 143 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 16H141.5"
                stroke="#395185"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="10 10"
              />
              <path d="M36.5 29L94.9997 27.9826" stroke="#385185" />
              <path
                d="M95.9869 13.9959C95.6607 10.6171 95.273 7.22596 95.0022 3.84098C94.8114 1.44073 93.3897 0.000574034 90.9648 0.000574034H90.1463C89.8871 0.177854 89.5802 0.272283 89.2662 0.271372H39.9256C39.6096 0.272371 39.3007 0.177989 39.0393 0.000574034C38.8177 0.000574034 38.5962 0.000574034 38.3685 0.000574034C37.9308 -0.00758307 37.496 0.0712667 37.0891 0.232545C36.6822 0.393824 36.3114 0.634318 35.9982 0.940069C35.685 1.24582 35.4356 1.61074 35.2646 2.01364C35.0936 2.41653 35.0043 2.84939 35.002 3.28708C35.002 8.14093 35.002 13.003 35.002 17.8732H96.3623C96.2454 16.5808 96.11 15.2884 95.9869 13.9959ZM80.1329 8.87536C80.1337 8.90982 80.1276 8.9441 80.115 8.97617C80.1024 9.00825 80.0835 9.03748 80.0594 9.06213C80.0353 9.08679 80.0065 9.10638 79.9748 9.11976C79.943 9.13313 79.9089 9.14001 79.8744 9.14001H39.0885C39.046 9.14017 39.004 9.12984 38.9664 9.1099C38.9288 9.08997 38.8968 9.06107 38.873 9.02576C38.8493 8.99044 38.8346 8.94981 38.8303 8.90747C38.8261 8.86513 38.8323 8.82239 38.8485 8.78305L40.8857 3.74251C40.9043 3.69385 40.9371 3.65195 40.98 3.6223C41.0228 3.59264 41.0736 3.57662 41.1257 3.57634H79.899C79.9335 3.57633 79.9676 3.58321 79.9994 3.59659C80.0312 3.60996 80.0599 3.62955 80.084 3.65421C80.1081 3.67887 80.127 3.7081 80.1396 3.74017C80.1523 3.77225 80.1583 3.80652 80.1575 3.84098L80.1329 8.87536ZM86.9029 15.6453H85.1611C85.0644 15.6332 84.9753 15.5862 84.9108 15.5131C84.8462 15.44 84.8106 15.3459 84.8106 15.2483C84.8106 15.1508 84.8462 15.0567 84.9108 14.9836C84.9753 14.9105 85.0644 14.8635 85.1611 14.8514H86.8844C86.9812 14.8635 87.0702 14.9105 87.1347 14.9836C87.1993 15.0567 87.2349 15.1508 87.2349 15.2483C87.2349 15.3459 87.1993 15.44 87.1347 15.5131C87.0702 15.5862 86.9812 15.6332 86.8844 15.6453H86.9029ZM91.4941 15.3991L84.7549 9.69391C84.6866 9.63105 84.6334 9.55355 84.5993 9.46722C84.5652 9.38089 84.5511 9.28796 84.558 9.1954L84.4595 4.16101C84.4774 4.02504 84.544 3.90017 84.647 3.80962C84.75 3.71906 84.8824 3.66897 85.0196 3.66866H91.3464C91.674 3.66846 91.9901 3.78982 92.2334 4.00925C92.4767 4.22867 92.6299 4.53056 92.6635 4.85647L93.6543 14.2298C93.681 14.4931 93.6284 14.7583 93.5034 14.9916C93.3784 15.2248 93.1866 15.4155 92.9526 15.5391C92.7187 15.6627 92.4531 15.7136 92.19 15.6854C91.9268 15.6572 91.6781 15.5511 91.4756 15.3807L91.4941 15.3991Z"
                fill="#395185"
              />
              <path
                d="M96.5467 20.341C96.5467 19.6948 96.4666 19.0486 96.4113 18.4023H35.0017C35.0017 19.0178 35.0017 19.6332 35.0017 20.2487C34.9748 21.0759 35.2739 21.8806 35.8344 22.4895C36.395 23.0985 37.1723 23.4629 37.9989 23.5044C38.1097 23.5044 40.0484 23.5044 43.1502 23.5044C43.1132 23.7282 43.0947 23.9546 43.0948 24.1814C43.0947 25.2785 43.4927 26.3384 44.215 27.1643C44.9373 27.9901 45.9348 28.5257 47.0222 28.6715C48.1096 28.8174 49.213 28.5637 50.1274 27.9575C51.0419 27.3513 51.7052 26.4338 51.9942 25.3754C52.2634 26.4536 52.9196 27.3952 53.8379 28.0211C54.7562 28.647 55.8725 28.9134 56.9745 28.7698C58.0765 28.6262 59.0872 28.0824 59.8144 27.2421C60.5415 26.4017 60.9344 25.3234 60.9183 24.2122C60.9162 24.0061 60.8997 23.8005 60.869 23.5967H78.994C78.994 24.7981 79.4713 25.9502 80.3207 26.7997C81.1702 27.6492 82.3224 28.1265 83.5237 28.1265C84.7251 28.1265 85.8772 27.6492 86.7267 26.7997C87.5762 25.9502 88.0534 24.7981 88.0534 23.5967C91.3584 23.5967 93.4633 23.5967 93.5925 23.5967C95.5127 23.4244 96.6451 22.2366 96.5467 20.341ZM47.6492 26.7417C47.1462 26.7405 46.6549 26.59 46.2374 26.3095C45.82 26.0289 45.4952 25.6307 45.3041 25.1655C45.113 24.7002 45.0643 24.1887 45.164 23.6957C45.2638 23.2027 45.5076 22.7504 45.8646 22.396C46.2215 22.0417 46.6756 21.8012 47.1693 21.705C47.663 21.6088 48.1741 21.6613 48.638 21.8557C49.1019 22.0502 49.4976 22.3779 49.7752 22.7973C50.0527 23.2168 50.1996 23.7092 50.1971 24.2122C50.1939 24.8853 49.9238 25.5295 49.4461 26.0037C48.9685 26.4779 48.3222 26.7433 47.6492 26.7417ZM56.3886 26.7417C55.8853 26.7417 55.3934 26.5923 54.9751 26.3125C54.5569 26.0326 54.2311 25.6349 54.0391 25.1697C53.8471 24.7046 53.7974 24.1929 53.8965 23.6995C53.9956 23.2061 54.2389 22.7532 54.5956 22.3982C54.9523 22.0432 55.4064 21.8021 55.9003 21.7054C56.3941 21.6087 56.9056 21.6608 57.3698 21.8551C57.8341 22.0494 58.2302 22.3771 58.508 22.7967C58.7858 23.2163 58.9328 23.709 58.9304 24.2122C58.9255 24.8837 58.6557 25.5261 58.1798 25.9998C57.7038 26.4735 57.0601 26.7401 56.3886 26.7417ZM83.5237 26.0585C83.0193 26.0561 82.5269 25.9039 82.109 25.6214C81.6911 25.3388 81.3665 24.9386 81.1763 24.4714C80.9861 24.0041 80.9388 23.491 81.0405 22.9969C81.1422 22.5028 81.3883 22.05 81.7476 21.6959C82.1069 21.3418 82.5632 21.1023 83.0587 21.0078C83.5543 20.9133 84.0667 20.9679 84.5311 21.1649C84.9955 21.3619 85.391 21.6923 85.6674 22.1143C85.9439 22.5362 86.0889 23.0308 86.084 23.5352C86.0759 24.2083 85.8024 24.851 85.3229 25.3235C84.8435 25.7961 84.1969 26.0602 83.5237 26.0585Z"
                fill="#395185"
              />
            </svg>
            <div className="text-center pt-2 text-sm" data-testid="duration">
              {timeParse(duration)}
            </div>
          </div>
          <div data-testid="destination" className="font-semibold text-lg">
            {destination}
          </div>
        </div>

        <div className="mt-4 flex justify-around">
          <div className="flex">
            <div className="-mt-3">
              <img
                className="w-16 fill-current text-primary"
                src={Walking}
                alt="Walking png"
              />
            </div>
            <div className="flex ml-5 mt-2">
              <p className="font-semibold">
                {originToBusTime}
                <span className="text-gray-500 text-sm font-semibold">
                  {' '}
                  min
                </span>
              </p>
              <p className="font-semibold ml-5">
                {originToBusDistance}
                <span className="text-gray-500 text-sm font-semibold"> Km</span>
              </p>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="-mt-3">
              <img
                className="w-10 fill-current text-primary"
                src={Trip}
                alt="Walking png"
              />
            </div>
            <div className="flex ml-5">
              <p className="font-semibold">
                {tripEST}
                <span className="text-gray-500 text-sm font-semibold">
                  {' '}
                  min
                </span>
              </p>
              <p className="font-semibold ml-5">
                {tripDistance}
                <span className="text-gray-500 text-sm font-semibold"> Km</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-right text-xs">
          <a href="#details" className="text-dblue">
            See Details
          </a>
        </div>
      </div>
      <hr className="border-b-2 border-gray-400"></hr>
    </>
  );
}
