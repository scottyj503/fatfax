import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './features/Home';
import Login from './features/Login';
import NotFound from './features/NotFound';
import Signup from './features/Signup';

const test = () => <Login />;
const test1 = () => withRouter(<Login />);

const Features = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={test} />
      <Route path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Features;
