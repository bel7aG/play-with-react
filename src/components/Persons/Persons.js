import React, { Component } from 'react';
import { Person } from '..';

export default class Persons extends Component {

  state = {
    persons: [
      {name: 'belhassen', surname: 'Gharsallah', age: 22, job: 'Javascript Developer'},
      {name: 'lola', surname: 'lol', age: 40, job: 'IDIOT'}
    ]
  };

  render() {
    const [personOne, personTwo] = this.state.persons;
    return (
      <div className="persons">
        <Person
          name={personOne.name} />

        <Person
          name={personTwo.name} />
      </div>
    );
  }
}
