import React, { useState } from 'react';
import Map from '../components/MapContainer';
import FormAndSuggestionsContainer from '../components/FormAndSuggestionsContainer';

export const clickItemDraw = React.createContext();
function Home() {
  const [coords, setCoords] = useState([]);
  const [showRoute, setShowRoute] = useState(false);
  const [name] = useState('');

  console.log(showRoute);
  return (
    <>
      <clickItemDraw.Provider
        value={{ coords, setCoords, showRoute, setShowRoute }}
      >
        <div className="absolute z-10 rounded-lg bg-white">
          <FormAndSuggestionsContainer name={name} />
        </div>
        <Map />
      </clickItemDraw.Provider>
    </>
  );
}

// import React, { useState } from 'react';
// import Map from '../components/MapContainer';
// import FormAndSuggestionsContainer from '../components/FormAndSuggestionsContainer';
// export default function home() {
//   const [coords, setCoords] = useState([]);
//   const [showRoute, setShowRoute] = useState(true);
//   return (
//     <>
//       <div className="absolute z-10 rounded-lg bg-white">
//         <FormAndSuggestionsContainer
//           setCoords={setCoords}
//           showRoute={showRoute}
//           setShowRoute={setShowRoute}
//         />
//       </div>
//       <Map showRoute={showRoute} coords={coords} />
//     </>
//   );
// }

export default Home;
