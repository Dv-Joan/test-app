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
      <div className=' text-4xl mb-4 font-bold tracking-wide font-Roboto'>
        Aplicando UseState
      </div>

      <div className='border-dashed border-2 border-violet-600 rounded-xl py-2 px-2 my-2'>
        <div className='text-white font-Roboto  tracking-wider text-xl py-4 px-2 '>
          <div className='flex'>
            Tienes
            <div className='bg-yellow-300 rounded w-auto text-center px-2 mx-1'>
              <strong className='text-slate-700 text-xl'> {cuenta}$</strong>
            </div>
            dólares en tu cuenta
          </div>
          <span className='font-bold'>POV : </span>
          <span className='italic'>" {texto} " </span>
        </div>
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
