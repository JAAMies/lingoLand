import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login} from './components';

export default class Routes extends Component {

  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Login} />
        {
          isLoggedIn &&
          <Switch>
            {/* Routes placed here are only available after logging in */}
          </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}