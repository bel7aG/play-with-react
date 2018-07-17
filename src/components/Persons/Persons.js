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
    this.setState(() => {
      return {
          persons: [
            {
              name: this.state.persons[2][randomName],
              surname: 'Gharsallah',
              age: 22,
              job: 'Javascript Developer'
            },
            {
              name: 'lola',
              surname: 'lol',
              age: 40,
              job: 'IDIOT'
            },
            ['bel7aG', 'React', 'DeveloperMan', true.toString()]]
      }
    });
  };

  onChangeName = (event) => {
    const inputValue = event.target.value;
    this.setState(() => ({
      persons: [
        {name: inputValue, surname: 'Gharsallah', age: 22, job: 'Javascript Developer'},
        {name: 'lola', surname: 'lol', age: 40, job: 'IDIOT'},
        ['bel7aG', 'React', 'DeveloperMan', true.toString()]
      ]
    }));
  }


  render() {
    const [personOne, personTwo] = this.state.persons;
    return (
      <div className="persons">
        <Person
          name={personOne.name}
          handleRandomName={this.handleRandomName}
          onChangeName={this.onChangeName}
          autoFocus={true} />

        <Person name={personTwo.name} autoFocus={false}/>
      </div>
    );
  }
}
