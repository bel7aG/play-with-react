import React, { Component } from 'react';
import Person from './components/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {name: 'bel7aG', age: '21'},
        {name: 'belhassen', age: '22'},
        {name: 'DABEBA', age: '25'}
      ]
    }
    this.handlePersonName = this.handlePersonName.bind(this);
  }

  handlePersonName(newName) {
    this.setState(() => ({
      persons: [
        {name: newName, age: '21'},
        {name: 'idiot', age: '22'},
        {name: 'dump', age: '25'}
      ]
    }));
  }

  onChangeName = (event) => {
    const name = event.target.value;
    this.setState(() => ({
      persons: [
        {name: name, age: '21'},
        {name: 'idiot', age: '22'},
        {name: 'dump', age: '25'}
      ]
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Play With ReactLove</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          handlePersonName={this.handlePersonName.bind(this, 'bel7assen')}
          onChangeName={this.onChangeName}/>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
