import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Persons, Home, NotFound } from '../components';

const AppRouter = () => (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/persons" component={Persons} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
);

export default AppRouter;
