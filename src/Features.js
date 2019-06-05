import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './features/Home';
import NotFound from './features/NotFound';

const Features = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound}/>
    </Switch>
  </main>
);

export default Features;
