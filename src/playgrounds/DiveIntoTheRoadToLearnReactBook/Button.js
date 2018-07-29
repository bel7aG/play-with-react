import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;

/*
  It might seem redundant to declare such a component. You will use a Button component instead of
  a button element. It only spares the type="button". Except for the type attribute you have to define
  everything else when you want to use the Button component. But you have to think about the long
  term investment here. Imagine you have several buttons in your application, but want to change an
  attribute, style or behavior for the button. Without the component you would have to refactor every
  button. Instead the Button component ensures to have only one single source of truth. One Button
  to refactor all buttons at once. One Button to rule them all.
  Since you already have a button element, you can use the Button component instead. It omits the
  type attribute, because the Button component specifies it.
*/
