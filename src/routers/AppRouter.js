import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Persons } from '../components';

const AppRouter = () => (
  <React.Fragment>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/persons" component={Persons} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);
