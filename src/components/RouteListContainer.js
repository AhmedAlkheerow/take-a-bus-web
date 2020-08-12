import React from 'react';
import RouteList from './RouteList';
import RouteListMap from './RouteListMap';

export default function RouteListContainer() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-start-2 col-span-10 w-full">
        <div className="rounded-lg boxshadow w-full h-full mt-16">
          <RouteListMap />
        </div>
        <div className="bg-white mt-8 rounded-lg boxshadow">
          <RouteList />
        </div>
      </div>
    </div>
  );
}
