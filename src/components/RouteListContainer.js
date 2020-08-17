import React, { useState } from 'react';
import RouteList from './RouteList';
import RouteListMap from './RouteListMap';

export default function RouteListContainer() {
  const [path, setPath] = useState(null);

  const handleSetPath = (data) => {
    setPath((oldData) => (oldData === data ? null : data));
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-start-2 col-span-10 w-full">
        <div className="rounded-lg boxshadow w-full h-28rem mt-16">
          <RouteListMap path={path} />
        </div>
        <div className="bg-white mt-8 rounded-lg boxshadow">
          <RouteList handleSetPath={handleSetPath} />
        </div>
      </div>
    </div>
  );
}
