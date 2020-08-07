import React from 'react';
import Map from './components/MapContainer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import RouteList from './components/RouteList';
function App() {
  return (
    <div>
      <Router>
        {/* <Layout> */}
        <Navbar />
        <switch>
          <Route path="/home" component={Map} />
          <Route path="/signin" render={() => <div />} />
          <Route path="/signup" render={() => <div />} />
          <Route path="/route/:id" render={() => <div />} />
          <Route path="/bus/:id" render={() => <div />} />
          <Route path="/form/:location/to/:location" render={() => <div />} />
          <Route path="/about" render={() => <div />} />
          <Route path="/me" render={() => <div />} />
          <Route path="/me/history" render={() => <div />} />
          <Route path="/me/favorite" render={() => <div />} />
          <Route path="/routes" component={RouteList} />
        </switch>
        {/* </Layout> */}
        <Map />
      </Router>
    </div>
  );
}

export default App;
