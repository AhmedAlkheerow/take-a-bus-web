import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouteList from './components/RouteList';
import home from './pages/home';
import about from './pages/about';

import allReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              {/* <Route path="/signin" component={Modal} />
            <Route path="/signup" component={Modal} /> */}
              <Route path="/route/:id" render={() => <div />} />
              <Route path="/bus/:id" render={() => <div />} />
              <Route
                path="/form/:location/to/:location"
                render={() => <div />}
              />
              <Route path="/about" component={about} />
              <Route path="/me" render={() => <div />} />
              <Route path="/me/history" render={() => <div />} />
              <Route path="/me/favorite" render={() => <div />} />
              <Route path="/routes" component={RouteList} />
              <Route exact path="/" component={home} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
