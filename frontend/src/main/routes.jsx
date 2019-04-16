import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from '../components/home/Home';
import User from '../components/user/User';

export default props => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/users' component={User} />
            <Redirect from='*' to='/' />
        </Switch>
  </main>
);