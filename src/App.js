import React, { Component } from 'react';
import Person from './components/Person';

class App extends Component {
  render() {
    const names = ['Belhassen', 'Maher', 'Marwen'],
    ages = [22, 30, 24];
    return (
      <div className="container">
        <h1>Play With ReactLove</h1>
        <Person name={names[0]} age={ages[0]}>
          <table border="1" style={{
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr>
                <td>git</td>
              </tr>
              <tr>
                <td>bel7aG</td>
              </tr>
            </thead>
          </table>
        </Person>
        <Person name={names[1]} age={ages[2]} />
        <Person name={names[2]} age={ages[1]} />
      </div>
    );
  }
}

export default App;
