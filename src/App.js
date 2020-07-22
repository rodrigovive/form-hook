import React from 'react';
import FormUser from './components/FormUser';
import {
  useSetState,
  getUser,
  initialUser,
  validate,
  isValid,
} from './hooks/useSetState';
import ListUsers from './components/ListUsers';

function App() {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = useSetState(initialUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const check = isValid(user);
    if (check) {
      const userData = getUser(user);
      setUsers([...users, { ...userData, id: users.length + 1 }]);
      setUser(initialUser);
    } else {
      Object.keys(user).map((key) => {
        const error = validate({ name: key, value: user[key].value });
        setUser({ [key]: { value: user[key].value, error } });
      });
    }
  };
  const handleChange = (e) => {
    const error = validate({ name: e.target.name, value: e.target.value });
    setUser({ [e.target.name]: { value: e.target.value, error } });
  };
  return (
    <main>
      <section>
        <h2>Registro de usuario</h2>
        <FormUser
          handleChange={handleChange}
          user={user}
          handleSubmit={handleSubmit}
        />
      </section>
      <section>
        <h2>Usuarios registrados</h2>
        <ListUsers users={users} />
      </section>
    </main>
  );
}

export default App;
