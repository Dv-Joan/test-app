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
      className=' rounded-xl  mx-5 my-5 px-10 py-7'
      style={{ background: '#2A2C41', color: '#F4F3F8' }}
    >
      <span className=' text-4xl font-bold tracking-wide font-Roboto'>
        Desde el componente useState
      </span>

      <p className='text-white font-Roboto  tracking-wider text-xl py-3 px-2'>
        Tienes <strong className='text-green-300 text-xl'>{cuenta}$</strong>{' '}
        dólares en tu cuenta <br></br>
        <span className='font-bold'>Texto : </span>
        {texto}
      </p>
      <button
        className=' bg-orange-500 flex-auto w-40 h-14 items-center text-center rounded-full  mx-5 my-3 drop-shadow-lg py-2.5 text-2xl cursor-pointer'
        onClick={aplicarState}
      >
        Get Money
      </button>
    </div>
  );
}

export default UseState;
