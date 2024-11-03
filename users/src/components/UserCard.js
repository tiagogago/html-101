import React, { useContext, useEffect, useState } from "react";
import DataContext from "../data/DataContext";
import usersData from "../data/usersData";

const UserCard = () => {
  const { state } = useContext(DataContext);
  const [user, setUser] = useState({});
  //console.log('UserCard', state);
  useEffect(() => {
    //console.log('UserCard', state.userId);
    setUser(usersData.filter((user) => user.id === state.userId)[0]);
    //console.log(user);
    //console.log do utilizador selecionado
  }, [state.userId]);

  if (user) {
    return (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={"img/" + user.photo}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-mod-8">
            <div className="card-body">
              <h5 className="card-title">{user.name}
              </h5>
              <p className="card-text">{user.email}</p>
              <p className="card-text">
                <small className="text-body-secondary">{user.level}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default UserCard;
