import React, { useEffect, useState } from 'react';

function FetchAPI() {
  const [state, setState] = useState([]);

  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    setState(users);
  };

  useEffect(() => {
    getData();
  }, []);

  // Reto : intentar mostrar "users" con un boton, utilizando useState

  return (
    <div>
      <h2>
        <strong>Lista de Usuarios</strong>
      </h2>
      {state.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}

export default FetchAPI;
