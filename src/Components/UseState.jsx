import React, { useState } from 'react';
function UseState() {
  const [cuenta, setCuenta] = useState(0);
  const [texto, setTexto] = useState('Estoy sin dinero');
  const aplicarState = () => {
    setCuenta(cuenta + 100);
    setTexto('Ahora tengo dinero');
  };
  return (
    <div
      className=' rounded-xl  mx-5 my-5 px-10 py-7'
      style={{ background: '#2A2C41', color: '#F4F3F8' }}
    >
      <span className=' text-4xl font-bold tracking-wide font-Roboto'>
        Aplicando UseState
      </span>

      <div className='border-dashed border-2 border-violet-600 rounded-xl py-2 px-2 my-2'>
        <p className='text-white font-Roboto  tracking-wider text-xl py-4 px-2'>
          Tienes <strong className='text-green-300 text-xl'>{cuenta}$</strong>{' '}
          dólares en tu cuenta <br></br>
          <span className='font-bold'>POV : </span>
          <span className='italic'>" {texto} " </span>
        </p>
      </div>
      <button
        className=' bg-slate-800 border-solid border-2 border-white py-2 px-5 mt-4 items-center text-center rounded-full drop-shadow-lg  text-xl cursor-pointer hover:bg-white hover:text-slate-800 active:bg-violet-600 '
        onClick={aplicarState}
      >
        Get Money
      </button>
    </div>
  );
}

export default UseState;
