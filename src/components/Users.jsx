import React from "react";

export const Users = ({user}) => {
  return (
    <div className="card_users">
      <h2>
        Mi nombre es:
        {`${user?.name.title} ${user?.name.first} ${user?.name.last}`}
      </h2>
      <img src={user?.picture.large} alt="" />
      <h3>Mi correo es: {user?.email}</h3>
      <h3>Genero: {user?.gender}</h3>
      <h3>
        Soy de: {user?.location.country} vivo en {user?.location.state} en la
        ciudad {user?.location.city}
      </h3>
      <h3>Mi Numero de telefono es: {user?.cell}</h3>
    </div>
  );
};
