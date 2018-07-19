import React from 'react';

const Person = (props) => {
  return (
    <div className={props.className}>
      <p>My Name is {props.name} im {props.age} years old</p>
      {props.children}
      <button onClick={props.handleRandomName}>Change</button>
      <input type="text"
        onChange={props.onChangeName}
        placeholder={props.name}
        autoFocus={props.autoFocus} />
      <button onClick={props.handleDeletePerson}>X</button>
    </div>
  );
}

export default Person;
