import React, { Component } from 'react';
import { Person } from '..';

export default class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {name: 'belhassen', surname: 'Gharsallah', age: 22, job: 'Javascript Developer'},
        {name: 'lola', surname: 'lol', age: 40, job: 'IDIOT'},
        ['bel7aG', 'React', 'DeveloperMan', true.toString()]
      ],
    };
    console.log(props);
  }

  handleRandomName = (event) => {
    event.preventDefault();
    console.log(event.target);
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
      <React.Fragment>
        {this.state.persons.length > 1 && (
          <form className="persons">
            {this.state.persons.filter(({surname}) => surname)
              .map((person) =>
                <Person
                  key={person.surname}
                  name={person.name}
                  handleRandomName={this.handleRandomName}
                  onChangeName={this.onChangeName}
                  className={`${person.name}-${person.surname}`}
                />)}
          </form>
        )}
      </React.Fragment>
    );
  }
}
