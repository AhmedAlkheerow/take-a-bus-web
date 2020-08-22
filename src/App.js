import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouteList from './components/RouteList';
import home from './pages/home';
import about from './pages/about';
import history from './pages/history';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
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
              <Route exact path="/me" render={() => <div />} />
              <Route path="/me/history" component={history} />
              <Route path="/me/favorite" render={() => <div />} />
              <Route path="/routes" component={RouteList} />
              <Route exact path="/" component={home} />
            </Switch>
          </Layout>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
