import React from 'react';

export default function History() {
  return (
    <>
      <table className="w-full table-auto rounded-lg shadow-lg">
        <thead>
          <tr>
            <td colSpan="5" className="pl-4">
              Recent Report
            </td>
            <td colSpan="2" className="w-1/6">
              <div className="text-gray-600 p-2 ">
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
                  placeholder="Search Keyword"
                ></input>
              </div>
            </td>
          </tr>
          <tr className="bg-gray-200">
            <th>No.</th>
            <th>Bus Number</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody align="center" className="space-y-64">
          <tr>
            <td className="py-4">1</td>
            <td className="py-4">4548742</td>
            <td className="py-4">Havallan</td>
            <td className="py-4">Citadle</td>
            <td className="py-4">14:30 - 16:30</td>
            <td className="py-4">5/8/2020</td>
          </tr>
          <tr>
            <td className="py-4">2</td>
            <td className="py-4">8943154</td>
            <td className="py-4">Citadle</td>
            <td className="py-4">Daratu</td>
            <td className="py-4">12:30 - 13:30</td>
            <td className="py-4">3/1/2020</td>
          </tr>
          <tr>
            <td className="py-4">2</td>
            <td className="py-4">8943154</td>
            <td className="py-4">Citadle</td>
            <td className="py-4">Daratu</td>
            <td className="py-4">12:30 - 13:30</td>
            <td className="py-4">3/1/2020</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
