import React from "react";

const ItemUser = ({ user }) => {
  return (
    <tr>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.birth}</td>
    </tr>
  );
};

export default ItemUser;
