import React, { useEffect, useState } from 'react';

function Spinner() {
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
    <div className='grid grid-flow-col  mt-5'>
      <div
        className=' hover:animate-ping flex-auto w-40 h-14 items-center text-center rounded-full  mx-5 my-3 drop-shadow-lg py-2.5 text-2xl cursor-pointer '
        style={{ background: color }}
      >
        Latency
      </div>
      <div
        className=' hover:animate-spin flex-auto w-40 h-14 items-center text-center rounded-full  mx-5 my-3 drop-shadow-lg py-2.5 text-2xl cursor-pointer '
        style={{ background: color }}
      >
        Spinner
      </div>
      <div
        className=' hover:animate-bounce flex-auto w-40 h-14 items-center text-center rounded-full  mx-5 my-3 drop-shadow-lg py-2.5 text-2xl cursor-pointer '
        style={{ background: color }}
      >
        Bounce
      </div>
      <div
        className=' hover:animate-pulse flex-auto w-40 h-14 items-center text-center rounded-full  mx-5 my-3 drop-shadow-lg py-2.5 text-2xl cursor-pointer '
        style={{ background: color }}
      >
        Pulse
      </div>
    </div>
  );
}

export default Spinner;
