import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

function UseEffect() {
  const spinnerValue = 1;
  return (
    <div
      className=' text-4xl font-bold tracking-wide font-Roboto rounded-xl mx-5 my-5 px-10 py-7 h-auto w-50'
      style={{ background: '#2A2C41', color: '#F4F3F8' }}
    >
      Aplicando Use Effect
      <div className=' grid grid-flow-col  mt-5'>
        <Spinner />
      </div>
    </div>
  );
}

export default UseEffect;
