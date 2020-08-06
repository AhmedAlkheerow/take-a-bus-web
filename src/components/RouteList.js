import React from 'react';
import WayLine from './WayLine';

const RouteList = () => {
  const routes = Array(5)
    .fill({})
    .map((e, index) =>
      Object.assign({
        id: index,
        name: '100 Meter St.',
        way: [
          { id: 0, isStart: true, name: '32 peak' },
          { id: 1, name: 'Italian Village' },
          { id: 2, name: 'Park View' },
          { id: 3, name: 'Naz Naz' },
          { id: 4, name: 'Empire' },
          { id: 5, name: 'Ankawa', isEnd: true },
        ],
        time: '6:00 AM - 9:00 PM',
      })
    );
  return (
    <>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <td colSpan="2">Route Lists</td>
            <td colSpan="2">
              <div className="text-gray-600 p-2">
                <svg
                  className="absolute mt-3 text-gray-600 h-4 w-4 ml-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>

                <input
                  className="w-full border-2 border-gray-300 bg-white h-10 pl-8 pr-2 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                ></input>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-400">
            <th>Route</th>
            <th>Route Way</th>
            <th>Available time</th>
            <th></th>
          </tr>
        </thead>
        <tbody align="center">
          {routes &&
            routes.length &&
            routes.map((route) => (
              <tr key={route.id} className="border-b">
                <td>{route.name}</td>
                <td>
                  <WayLine way={route.way} />
                </td>
                <td>{route.time}</td>
                <td className="">
                  <svg
                    width="21"
                    height="13"
                    viewBox="0 0 21 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 0L10.5 8.125L18 0L21 1.625L10.5 13L0 1.625L3 0Z"
                      fill="#18A0FB"
                    />
                  </svg>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default RouteList;
