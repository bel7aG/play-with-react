import React from 'react';

const Form = (props) => {
  const { children, value, onSearchChange, searchItem } = props;
  return (
    <div className="form">
      {children}
      <form className="form-box">
        <input
          type="text"
          value={searchItem} // In React, you should make sure to make those elements controlled components
          className="form-input"
          onChange={(event) => onSearchChange(event)}
        />
      </form>
    </div>
  )
};

export default Form;
