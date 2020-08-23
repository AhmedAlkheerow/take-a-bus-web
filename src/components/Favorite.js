import React from 'react';
import BusInfoContainer from './BusInfoContainer';

export default function Favorite() {
  return (
    <>
      <ul className="list-none">
        <li className="mb-16 rounded-lg boxshadow">
          <BusInfoContainer dontShowTakeIt={true} fillHeart={true} />
        </li>
        <li className="mb-16 rounded-lg boxshadow">
          <BusInfoContainer dontShowTakeIt={true} fillHeart={true} />
        </li>
      </ul>
    </>
  );
}
