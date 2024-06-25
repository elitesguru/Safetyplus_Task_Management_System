
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/signup';
import Signin from './components/signin';
import Dashboard from './components/dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/dashboard" component={Dashboard} />
      {/* Add more routes as needed */}
    </Switch>
  </Router>
);

export default Routes;
