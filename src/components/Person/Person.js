import React from 'react';

const Person = (props) => {
  return (
    <div>
      <p>My Name is {props.name} im {props.age} years old</p>
      {props.children}
      <button onClick={props.handleRandomName}>Change</button>
      <input type="text"
        onChange={props.onChangeName}
        placeholder={props.name}
        autoFocus={props.autoFocus} />
    </div>
  );
}

export default Person;
