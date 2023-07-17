import React from 'react';
import classes from './InputField.module.css';

const InputField = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.inputState.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.text}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default InputField;
