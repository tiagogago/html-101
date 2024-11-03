import React from "react";

const Select = (props) => {
  const options = props.options.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.option}
      </option>
    );
  });

  return (
    <div>
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <select id={props.id} name={props.name} className="form-select">
        {options}
      </select>
    </div>
  );
};

export default Select;
