import React from 'react';
import Textfield from '../Textfield';
import Button from '../Button';

const FormUser = ({ handleSubmit, user, handleChange }) => {
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Textfield
        type="text"
        name="firstname"
        handleChange={handleChange}
        label="Nombres"
        value={user.firstname.value}
        error={user.firstname.error}
      />
      <Textfield
        value={user.lastname.value}
        type="text"
        name="lastname"
        handleChange={handleChange}
        label="Apellidos"
        error={user.lastname.error}
      />
      <Textfield
        value={user.birth.value}
        type="date"
        name="birth"
        handleChange={handleChange}
        label="Fecha de nacimiento"
        error={user.birth.error}
      />
      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default FormUser;
