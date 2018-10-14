import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Metronome from './utils/Metronome';

class Utils extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/utils/metronome"
            component={Metronome}
          />

          <Route
            path="/utils/"
            component={RedirectToHome}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const RedirectToHome = () => <Redirect to="/home" />;

export default Utils;
