import React from 'react';
import Map from './Components/MapContainer';
import Navbar from './Components/Navbar';
import BusList from './Components/AvailableBuses/AvailableBusesList'
function App() {
  return (
    <div>
      {/* <Navbar />
      <Map /> */}
      <BusList />
    </div>
  );
}

export default App;
