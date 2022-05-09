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
    <div
      className=' rounded-xl  mx-5 my-5 px-10 py-7 font-Roboto font-bold tracking-wider'
      style={{ background: '#2A2C41', color: '#F4F3F8' }}
    >
      <span className=' text-4xl font-bold tracking-wide font-Roboto my-2'>
        Lista de Usuarios (Using Fetch)
      </span>
      <p className='text-2xl font-Roboto tracking-wider pl-12'>
        {state.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </p>
    </div>
  );
}

export default FetchAPI;
