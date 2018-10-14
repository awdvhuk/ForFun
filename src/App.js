import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './routes/Home';
import Games from './routes/Games';
import Utils from './routes/Utils';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />

          <div className="container">
            <Switch>
              <Route
                exact
                path="/home"
                component={Home}
              />

              <Route
                path="/games"
                component={Games}
              />

              <Route
                path="/utils"
                component={Utils}
              />

              <Route
                path="/"
                component={RedirectToHome}
              />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const RedirectToHome = () => <Redirect to="/home" />;

export default App;
