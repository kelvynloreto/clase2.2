import React, { useEffect, useState } from "react";
import axios from "axios";

export const Users = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        const URL = "https://randomuser.me/api/";
        axios
          .get(URL)
          .then((resp) => setUser(resp.data.results[0]))
          .catch((error) => console.log(error.message));
          }, []);
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
