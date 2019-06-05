import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './features/Home';
import Login from './features/Login';
import NotFound from './features/NotFound';
import Signup from './features/Signup';

const Features = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Features;
