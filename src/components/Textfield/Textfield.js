import React from "react";

const Textfield = ({ type, handleChange, placeholder, label, name }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
    />
  </div>
);

export default Textfield;
