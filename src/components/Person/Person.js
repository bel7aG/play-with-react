import React from 'react';

const Person = (props) => {
  return (
    <div>
      <p>My Name is {props.name} im {props.age} years old</p>
      {props.children}
      <button onClick={props.handlePersonName}>{props.name}</button>
      <input type="text" onChange={this.onChangeName} value={props} />
    </div>
  );
}

export default Person;
