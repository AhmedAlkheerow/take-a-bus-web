import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RouteListJson from '../data/RouteList.json';
import WayLine from './WayLine';
import Fuse from 'fuse.js';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const RouteList = ({ handleSetPath }) => {
  const [showAvailableBuses, setShowAvailableBuses] = useState(null);
  const [query, setQuery] = useState('');

  const handleShowAvailableBuses = (id) => {
    setShowAvailableBuses((oldId) => (oldId === id ? null : id));
    handleSetPath(RouteListJson[id].path);
  };

  const handleOnSearch = (event) => {
    setQuery(event.target.value);
  };

  const options = {
    includeScore: true,
    keys: ['name', 'way.name', 'time', 'availableBuses.busNumber'],
  };

  const fuse = new Fuse(RouteListJson, options);
  const results = fuse.search(query);
  const RouteResults = query
    ? results.map((result) => result.item)
    : RouteListJson;

  return (
    <>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <td colSpan="2" className="pl-8 text-primary font-semibold">
              Route Lists
            </td>
            <td colSpan="2">
              <div className="text-gray-600 p-2 float-right">
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
                  className="w-full border-2 border-gray-300 bg-white h-10 pl-8 pr-2 mr-20 rounded-lg text-sm focus:outline-none"
                  type="search"
                  value={query}
                  onChange={handleOnSearch}
                  name="search"
                  placeholder="Search"
                ></input>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-300">
            <th>Route</th>
            <th>Route Way</th>
            <th>Available time</th>
            <th></th>
          </tr>
        </thead>
        <tbody align="center">
          {RouteListJson &&
            RouteListJson.length &&
            RouteResults.map((route) => {
              const { id, name, way, time, availableBuses } = route;
              return (
                <>
                  <tr key={id} className="border-b">
                    <td>{name}</td>
                    <td>
                      <WayLine way={way} />
                    </td>
                    <td>{time}</td>
                    <td
                      className="fill-current text-primary hover:text-blue-700 cursor-pointer"
                      onClick={() => handleShowAvailableBuses(id)}
                    >
                      {showAvailableBuses === id ? (
                        <IoIosArrowUp size="40" />
                      ) : (
                        <IoIosArrowDown size="40" />
                      )}
                    </td>
                  </tr>
                  {showAvailableBuses === id ? (
                    <tr>
                      <td>{availableBuses[0].busNumber}</td>
                      <td>@JalalArif todo:add busList component here</td>
                    </tr>
                  ) : null}
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default RouteList;

RouteList.propTypes = {
  handleSetPath: PropTypes.func.isRequired,
};
