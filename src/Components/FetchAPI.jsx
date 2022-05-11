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
      className=' rounded-xl  mx-5 my-5 px-10 py-7 '
      style={{ background: '#2A2C41', color: '#F4F3F8' }}
    >
      <div className=' text-4xl font-bold tracking-wide font-Roboto flex'>
        PlaceHolder
        <div className=' text-white mx-3 text-xl h-7 mt-1.5 bg-violet-600 px-2 rounded'>
          API
        </div>
      </div>
      <div className=' pt-7'>
        <table className='table-fixed font-Roboto tracking-wider'>
          <thead>
            <tr className='text-center  text-xl text-slate-700 '>
              <th className='w-64 bg-slate-300 rounded-l'>Name</th>
              <th className='w-64 bg-slate-400 '>Username</th>
              <th className='w-64 bg-slate-500 rounded-r'>Email</th>
            </tr>
          </thead>

          <tbody>
            {state.map((user) => (
              <tr key={user.id}>
                <div className='px-7 border-2 border-dotted rounded-l border-slate-600'>
                  {user.name}
                </div>
                <td className='px-12 border-2 border-dotted border-slate-600'>
                  {user.username}
                </td>
                <div className='px-10 border-2 border-dotted rounded-r border-slate-600'>
                  {user.email}
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchAPI;
