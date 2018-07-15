import React from 'react';

const Person = (props, refs) => {
  console.log(refs);
  return (
    <div>
      <p>My Name is {props.name} im {props.age} years old</p>
      {props.children}
      <button onMouseMove={props.handlePersonName}>{props.name}</button>
    </div>
  );
}

export default Person;
