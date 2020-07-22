import React from 'react';
import ItemUser from './ItemUser';

const ListUsers = ({ users }) => {
  return (
    <table className="min-w-full mt-4">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-100 border-b border-gray-200">
            Nombres
          </th>
          <th className="px-6 py-3 bg-gray-100 border-b border-gray-200">
            Apellidos
          </th>
          <th className="px-6 py-3 bg-gray-100 border-b border-gray-200">
            Fecha de nacimiento
          </th>
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
