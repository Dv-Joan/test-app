import React, { useEffect, useState } from 'react';

function UseEffect() {
  //Prueba de UseEffect
  useEffect(() => {
    console.log('Use Effect está corriendo');
  }, []);

  const [color, setColor] = useState(null);

  //Cambiar color a un DiV con UseEffect
  useEffect(() => {
    function onColorChange(evento) {
      if (evento.clientX > window.innerWidth / 2) {
        setColor('purple');
      } else {
        setColor('violet');
      }
    }
    window.addEventListener('mousemove', onColorChange);
  }, []);

  return (
    <div className='font-bold-underline bg-red-500 rounded-xl mx-5 my-3 px-5 py-3 '>
      Desde el componente useEffect
      <div
        className=' flex-auto w-60 h-14 items-center rounded-lg  mx-5 my-3 drop-shadow-lg '
        style={{ background: color }}
      ></div>
    </div>
  );
}

export default UseEffect;
