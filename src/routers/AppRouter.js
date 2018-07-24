import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Main, Persons, Home, NotFound } from '../components';
import { RoadToLearnReact } from '../playgrounds';

const AppRouter = () => (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/persons" component={Persons} exact />
            <Route path="/the-road-to-learn-react" component={RoadToLearnReact} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </React.Fragment>
    </BrowserRouter>
);

export default AppRouter;
