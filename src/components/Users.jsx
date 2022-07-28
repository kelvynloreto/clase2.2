import React from "react";

export const Users = ({user}) => {
  return (
    <div className="card_users">
      <h2>
        Name: 
        {` ${user?.name.title} ${user?.name.first} ${user?.name.last}`}
      </h2>
      <img src={user?.picture.large} alt="" />
      <h3>Email: {user?.email}</h3>
      <h3>Gender: {user?.gender}</h3>
      <h3>
        Country: {user?.location.country} , State: {user?.location.state} , 
        City: {user?.location.city}
      </h3>
      <h3>Number: {user?.cell}</h3>
    </div>
  );
};
