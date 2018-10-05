import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Game_2048 from './games/Game_2048';

class Games extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/games/2048"
            component={Game_2048}
          />

          <Route
            path="/games/"
            component={RedirectToHome}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const RedirectToHome = () => <Redirect to="/home" />;

export default Games;
