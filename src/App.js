import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Textfield from "./components/Textfield";
import Button from "./components/Button";

function App() {
  const [users, setUsers] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: users.length + 1,
      name: e.target.firstname.value,
      last: e.target.lastname.value,
      birth: e.target.birth.value,
    };
    console.log("user", user);
    setUsers([...users, user]);
  };

  return (
    <main>
      <h1>Registro de usuario</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <Textfield
            type="text"
            name="firstname"
            handleChange={() => {}}
            label="Nombres"
          />
          <Textfield
            type="text"
            name="lastname"
            handleChange={() => {}}
            label="Apellidos"
          />
          <Textfield
            type="date"
            name="birth"
            handleChange={() => {}}
            label="Fecha de nacimiento"
          />
          <Button type="submit">Registrar</Button>
        </form>
      </section>
      <section>
        <h2>Usuarios registrados</h2>

        <table>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Fecha de nacimiento</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.last}</td>
                <td>{user.birth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
