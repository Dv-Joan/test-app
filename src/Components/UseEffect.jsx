import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

function UseEffect() {
  const spinnerValue = 1;
  return (
    <div className=' text-4xl font-bold tracking-wide font-Roboto font-bold-underline bg-gradient-to-r from-orange-400 to-orange-300 rounded-xl mx-5 my-5 px-10 py-7   '>
      Aplicando Use Effect
      <div className=' grid grid-flow-col  mt-5'>
        <Spinner />
      </div>
    </div>
  );
}

export default UseEffect;
