import React from "react";
import ItemUser from "./ItemUser";

const ListUsers = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Fecha de nacimiento</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <ItemUser key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};
export default ListUsers;
