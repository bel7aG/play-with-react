import React, { Component } from 'react';
import { Person } from '..';

export default class Persons extends Component {

  state = {
    persons: [
      {name: 'belhassen', surname: 'Gharsallah', age: 22, job: 'Javascript Developer'},
      {name: 'lola', surname: 'lol', age: 40, job: 'IDIOT'},
      ['bel7aG', 'React', 'DeveloperMan', true.toString()]
    ],
  };

  handleRandomName = () => {
    const randomName = Math.floor(Math.random() * this.state.persons[2].length);
    this.setState((prevState) => {
      console.log(prevState);
      return {
        persons: [
          ...prevState.persons,
          prevState.persons[0].name === 'belhassen' ? prevState.persons[0].name = 'bel7aG' : prevState.persons[0].name = 'belhassen'
        ]
      }
    });
    console.log(this.state.persons[2][randomName]);
  };



  render() {
    const [personOne, personTwo] = this.state.persons;
    return (
      <div className="persons">
        <Person
          name={personOne.name}
          handleRandomName={this.handleRandomName} />

        <Person
          name={personTwo.name} />
      </div>
    );
  }
}
