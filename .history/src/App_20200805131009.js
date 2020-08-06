import React from 'react';
import BusDetailPopUp from './components/BusDetailPopUp';
import RouteWay from './components/RouteWay';
function App() {
  return (
    <div>
      <BusDetailPopUp></BusDetailPopUp>
      <div className="w-1/3">
        <RouteWay></RouteWay>
      </div>
    </div>
  );
}

export default App;
