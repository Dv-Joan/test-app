import React from 'react';

export default function Events() {
  const handleClick = (evento, mensaje) => {
    console.log(evento.target);
  };
  return (
    <div
      className=' rounded-xl  mx-5 my-5 px-10 py-7 '
      style={{ background: '#2A2C41', color: '#F4F3F8' }}
    >
      <h2 className='font-Roboto text-3xl font-bold'>
        Desde el Componente Events
      </h2>
    </div>
  );
}
