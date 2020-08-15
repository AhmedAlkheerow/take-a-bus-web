import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouteList from './components/RouteList';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            {/* <Route path="/signin" component={Modal} />
            <Route path="/signup" component={Modal} /> */}
            <Route path="/route/:id" render={() => <div />} />
            <Route path="/bus/:id" render={() => <div />} />
            <Route path="/form/:location/to/:location" render={() => <div />} />
            <Route path="/about" render={() => <div />} />
            <Route path="/me" render={() => <div />} />
            <Route path="/me/history" render={() => <div />} />
            <Route path="/me/favorite" render={() => <div />} />
            <Route path="/routes" component={RouteList} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
