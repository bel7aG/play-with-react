import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Person } from '../components';

const AppRouter = () => (
  <React.Fragment>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Person} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);
