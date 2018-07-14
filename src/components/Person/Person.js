import React from 'react';

const Person = (props) => (
  <div>
    <p>My Name is {props.name} im {props.age} years old</p>
    {props.children}
  </div>
);

export default Person;
