import React from 'react';

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
    <div className="w-full mt-2">
      <label className="text-lg leading-5" htmlFor={name}>
        {label}:
      </label>
      <div>
        <input
          className="w-full mt-1 text-lg form-input"
          value={value}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          type={type}
        />
        {!!error && (
          <span className="block mt-1 text-xs text-red-500">{error}</span>
        )}
      </div>
    </div>
  </>
);

export default Textfield;
