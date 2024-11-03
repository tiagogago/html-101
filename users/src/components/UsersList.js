import usersData from "../data/usersData";
import React, { useContext } from "react";
import DataContext from "../data/DataContext";

const UsersList = () => {
  const { setState } = useContext(DataContext);
  const usersLi = usersData.map((user) => {
    return (
      <li
        key={user.id}
        style={{ cursor: "pointer" }}
        onClick={(e) => selectUser(user.id, user.level)}
        className="list-group-item d-flex justify-content-between align-items-start"
      >
        {user.name}
        <span class="badge bg-primary rounded-pill">{user.level}</span>
      </li>
    );
  });

  const selectUser = (id, level) => {
    console.log(id, level);
    setState({ userId: id, userLevel: level });
  };

  return (
    <div>
      <ul className="list-group">{usersLi}</ul>
    </div>
  );
};

export default UsersList;
