import React, { Component } from 'react';
import { Person } from '..';

export default class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id: 'ABC1', name: 'belhassen', surname: 'Gharsallah', age: 22, job: 'Javascript Developer'},
        {id: 'ABC2', name: 'lola', surname: 'lol', age: 40, job: 'IDIOT'},
        {id: 'ABC3', name: '7i7on', surname: 'opps', age: 31, job: 'IDIOT'},
        {id: 'ABC4', name: 'idiot', surname: 'orOoops', age: 30, job: 'IDIOT'},
        {id: 'ABC5', name: 'kid', surname: 'supsupsup', age: 10, job: 'IDIOT'},
        ['bel7aG', 'React', 'DeveloperMan', true.toString()]
      ],
      isVisible: true
    };
  }

  componentWillUnmount() {
    
  }

  handleRandomName = (event, personId) => {
    event.preventDefault();

    const randomNameNum = Math.floor(Math.random() * this.state.persons[
      this.state.persons.findIndex((element) => Array.isArray(element))
    ].length);

    this.setState((prevState) => ({
      persons: prevState.persons.map((person) => {
          if (person.id === personId) {
            return {
              ...person,
              ...person.name = prevState.persons[
                prevState.persons.findIndex((person) => Array.isArray(person))
              ][randomNameNum]
            }
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
      backgroundColor: 'rgba(0, 255, 10, .4)',
      border: '1px solid #f00',
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px 7px',
      cursor: 'pointer',
      width: 100,
      fontSize: 18
    };

    const removeButton = {
      backgroundColor: 'white',
      color: 'yellow',
      fontSize: 22,
      padding: '22px 11px',
      border: 'none',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    };

    let classes = ['persons'];
    if (this.state.persons.length - 1 <= 2) {
      removeButton.backgroundColor = 'red';
      classes.push('red opa');
    } else {
      classes.push('opaNo');
    }

    let personsForm = null;
    if (this.state.isVisible) {
      personsForm = (
        <form className={classes.join(' ')}>
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
                removeButtonStyles={removeButton}
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
