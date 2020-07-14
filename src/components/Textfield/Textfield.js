import React from "react";

const Textfield = ({
  error,
  value,
  type,
  handleChange,
  placeholder,
  label,
  name,
}) => (
  <>
    <div className="TextField">
      <label htmlFor={name}>{label}:</label>
      <div>
        <input
          value={value}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          type={type}
        />
        {!!error && <span className="TextField-error">{error}</span>}
      </div>
    </div>
  </>
);

export default Textfield;
