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
    <div className='text-4xl font-bold tracking-wide font-Roboto font-bold-underline bg-red-500 rounded-xl mx-5 my-3 px-5 py-5 '>
      <h1 className='text-3xl py-2 leading-relaxed pl-10'>
        <strong>Lista de Usuarios (Using Fetch)</strong>
      </h1>
      <h3 className='text-2xl font-Roboto tracking-wider pl-12'>
        {state.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </h3>
    </div>
  );
}

export default FetchAPI;
