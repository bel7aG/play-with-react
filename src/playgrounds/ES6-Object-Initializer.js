import React from 'react';
// just play because more code more experience

const myOne = {
  a: function() {
    console.log('holly holly');
  },
  ok: 'my okey',
  myName: 'myName'
};

const correctMyOneUsingES6 = {
  a() {
    console.log('holly holly');
  },
  ok: 'my okey',
  myName: 'ok'
};

// Last but not least use computed property names in JavaScript ES6

const key =  'myName';
const MyOneUsingES6Computed = {
  a() {
    console.log('holly holly');
  },
  ok: 'my okey',
  [key]: 'bel7aG'
};
