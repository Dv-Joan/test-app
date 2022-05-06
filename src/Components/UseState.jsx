import React, { useState } from 'react';
function UseState() {
  const [cuenta, setCuenta] = useState(100);
  const [texto, setTexto] = useState('Soy el primer texto');
  const aplicarState = () => {
    setCuenta(cuenta + 10);
    setTexto('Soy otro texto');
  };
  return (
    <div
      className='font-Roboto text-4xl font-bold  rounded-xl  mx-5 my-5 px-10 py-7'
      style={{ background: '#2A2C41', color: '#F4F3F8' }}
    >
      Desde el componente useState
      <p className='text-white font-mono font-bold text-xl py-2 '>
        Usted tiene{' '}
        <strong className='text-green-300 text-xl'>${cuenta}</strong> dólares en
        su cuenta <br></br>
        Texto: {texto}
      </p>
      <button
        className='
        rounded-full  px-10 py-3 mx-5 my-3 drop-shadow-lg hover:bg-slate-700 active:bg-slate-400 focus:outline-none focus:ring focus:ring-slate-300 '
        style={{ background: '##FF724C' }}
        onClick={aplicarState}
      >
        Get Money
      </button>
    </div>
  );
}

export default UseState;
