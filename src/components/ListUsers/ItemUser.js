import React from 'react';

const ItemUser = ({ user }) => {
  return (
    <tr className="bg-white">
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-no-wrap leading-5">
        {user.firstname}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-no-wrap leading-5">
        {user.lastname}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-no-wrap leading-5">
        {user.birth}
      </td>
    </tr>
  );
};

export default ItemUser;
