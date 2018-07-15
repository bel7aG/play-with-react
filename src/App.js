import React, { Component } from 'react';
import Person from './components/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {name: 'Belhassen', age: '21'},
        {name: 'idiot', age: '22'},
        {name: 'dump', age: '25'}
      ]
    }

    this.handlePersonName = this.handlePersonName.bind(this);
  }

  handlePersonName() {
    this.setState(() => ({
      persons: [
        {name: 'Belhassen', age: '21', job: 'developer'},
        {name: 'idiot', age: '22'},
        {name: 'dump', age: '25'}
      ]
    }));
  }


  render() {
    return (
      <div className="container">
        <h1>Play With ReactLove</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          {this.state.persons[0].job && <p> and my job is a {this.state.persons[0].job}</p>}
        </Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          handlePersonName={this.handlePersonName} />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
