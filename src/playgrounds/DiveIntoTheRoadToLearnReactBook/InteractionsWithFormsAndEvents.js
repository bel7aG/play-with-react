import React from 'react';

const Form = (props) => (
    <div className="form">
      <form className="form-box">
        <input
          type="text"
          value={props.searchItem} // In React, you should make sure to make those elements controlled components
          className="form-input"
          onChange={(event) => props.onSearchChange(event, props.title)}
        />
      </form>
    </div>
);

export default Form;
