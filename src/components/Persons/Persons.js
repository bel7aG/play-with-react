import React, { Component } from 'react';
import { Person } from '..';

export default class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id: 'ABC1', name: 'belhassen', surname: 'Gharsallah', age: 22, job: 'Javascript Developer'},
        {id: 'ABC2', name: 'lola', surname: 'lol', age: 40, job: 'IDIOT'},
        ['bel7aG', 'React', 'DeveloperMan', true.toString()]
      ],
      isVisible: true
    };
    console.log(props);
  }

  handleRandomName = (event, personId) => {
    event.preventDefault();
    console.log(event.target.previousElementSibling.textContent.slice());
    const randomName = Math.floor(Math.random() * this.state.persons[2].length);
    console.log(this.state.persons[2][randomName]);
    this.setState((prevState) => ({
      persons: prevState.persons.map((person, index) => {
        if (person.id === personId) {
          return {
            ...person,
            ...person.name = prevState.persons[
              prevState.persons.findIndex((person) => Array.isArray(person))
            ][randomName]
          };
        }
        return person;
      })
    }));
  };

  onChangeName = (event, personId) => {
    const inputValue = event.target.value;
    // const findPersonIndex = this.state.persons.findIndex(({id}) => id === personId);
    // const selectedPerson = {
    //   ...this.state.persons[findPersonIndex],
    // }
    // selectedPerson.name = inputValue;
    // const persons = [...this.state.persons];
    // persons[findPersonIndex] = selectedPerson;

    this.setState((prevState) => ({
      persons: prevState.persons.map((person, index) => {
        if (person.id === personId) {
          return {
            ...person,
            ...person.name = inputValue
          }
        }
        return person;
      })
    }))
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

    const toggleButtonStyle = {
      backgroundColor: '#0f4',
      border: '1px solid #f00',
      padding: '10px 7px',
      vursor: 'pointer'
    };

    let personsForm = null;
    if (this.state.isVisible) {
      personsForm = (
        <form className="persons" >
          {this.state.persons.filter(({surname}) => surname)
            .map((person, index) =>
              <Person
                handleDeletePerson={this.handleDeletePerson.bind(this, index)}
                handleRandomName={(event) => {
                  this.handleRandomName(event, person.id);
                }}
                onChangeName={(event) => {
                  this.onChangeName(event, person.id);
                }}
                name={person.name}
                age={person.age}
                key={person.surname}
                className={`${person.name}-${person.surname}`}
              />)}
        </form>
      );
      toggleButtonStyle.backgroundColor = '#F00';
    }

    return (
      <React.Fragment>
        {this.state.persons.length > 1 && (
          <React.Fragment>
            <button
              onClick={this.handleIsVisible}
              style={toggleButtonStyle}
            >
              {this.state.isVisible ? 'Hide': 'Show'}
            </button>
            {personsForm}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
