import React, { Component } from 'react';
import Person from './components/Person';
import AppRouter from './routers/AppRouter';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppRouter />
      </div>
    );
  }
}
