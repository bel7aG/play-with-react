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
      isVisible: true
    };
    console.log(props);
  }

  handleRandomName = (event) => {
    event.preventDefault();
    console.log(event.target.parentElement);
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

  handleIsVisible = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible
    }));
  }

  handleDeletePerson = (personIndex) => {
    this.setState((prevState) => ({
      persons: prevState.persons.filter((person, index) => index !== personIndex)
    }));
  }

  render() {
    let personsForm = null;
    if (this.state.isVisible) {
      personsForm = (
        <form className="persons" >
          {this.state.persons.filter(({surname}) => surname)
            .map((person, index) =>
              <Person
                handleDeletePerson={this.handleDeletePerson.bind(this, index)}
                key={person.surname}
                name={person.name}
                handleRandomName={this.handleRandomName}
                onChangeName={this.onChangeName}
                className={`${person.name}-${person.surname}`}
              />)}
        </form>
      );
    }

    return (
      <React.Fragment>
        {this.state.persons.length > 1 && (
          <React.Fragment>
            <button onClick={this.handleIsVisible}>{this.state.isVisible ? 'Hide': 'Show'}</button>
            {personsForm}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
