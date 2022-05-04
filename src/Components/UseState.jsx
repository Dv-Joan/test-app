import React, { useState } from 'react';
function UseState() {
  const [cuenta, setCuenta] = useState(100);
  const [texto, setTexto] = useState('Soy el primer texto');
  const aplicarState = () => {
    setCuenta(cuenta + 10);
    setTexto('Soy otro texto');
  };
  return (
    <div className=' mx-5 my-3'>
      <p className='text-black font-bold-underline'>
        Usted tiene {cuenta} dólares en su cuenta <br></br>
        Texto: {texto}
      </p>
      <button
        className='
        rounded-full  px-10 py-3 mx-5 my-3 bg-slate-800 drop-shadow-lg hover:bg-slate-700 active:bg-slate-400 focus:outline-none focus:ring focus:ring-slate-300'
        onClick={aplicarState}
      >
        Get Money
      </button>
    </div>
  );
}

export default UseState;
