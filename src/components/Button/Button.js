import React from 'react';

const Button = ({ children, type }) => (
  <button className="px-4 py-2 mt-4 text-indigo-500 bg-blue-200" type={type}>
    {children}
  </button>
);

export default Button;
