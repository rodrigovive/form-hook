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
      setUsers((users) => [...users, { ...userData, id: users.length + 1 }]);
      setUser(initialUser);
    } else {
      Object.keys(user).map((key) => {
        const error = validate({ name: key, value: user[key].value });
        return setUser({ [key]: { value: user[key].value, error } });
      });
    }
  };
  const handleChange = (e) => {
    const error = validate({ name: e.target.name, value: e.target.value });
    setUser({ [e.target.name]: { value: e.target.value, error } });
  };
  return (
    <main className="flex items-center justify-center">
      <div className="container flex flex-col md:flex-row md:mt-20">
        <section className="w-full px-4 mt-4 md:px-8 md:mt-0">
          <h2 className="text-lg text-blue-500 uppercase">
            Registro de usuario
          </h2>
          <FormUser
            handleChange={handleChange}
            user={user}
            handleSubmit={handleSubmit}
          />
        </section>
        <section className="w-full px-4 mt-4 md:px-8 md:mt-0">
          <h2 className="text-lg text-blue-500 uppercase">
            Usuarios registrados
          </h2>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full overflow-hidden align-middle shadow">
              <ListUsers users={users} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
