import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './features/Home';
import Login from './features/Login';
import NotFound from './features/NotFound';
import Signup from './features/Signup';
import ResetPassword from './features/ResetPassword';

const Features = props => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login/reset" component={ResetPassword} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Features;
