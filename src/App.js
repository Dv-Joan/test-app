import UseEffect from './Components/UseEffect';
import UseState from './Components/UseState';
import FetchAPI from './Components/FetchAPI';
import React from 'react';
<<<<<<< HEAD
import Events from './Components/Events';

function App() {
  return (
    <React.Fragment>
      <div
        className='text-5xl text-center  font-mono font-bold py-10 px-7 '
        style={{ background: '#F4F3F8', color: '#201C31' }}
      >
        REACT | TailWind BASICS
      </div>
      <div
        className=' text-white py-1  px-11 '
        style={{ background: '#F4F3F8', color: '#201C31' }}
      >
        <UseEffect />
        <UseState />
        <FetchAPI />
        <Events />
      </div>
=======
import Banner from './Components/banner.png'


function App() {

  return (  
    <React.Fragment >
    <div className="text-5xl text-center font-mono font-bold py-10 px-7 " style={{background : "#F4F3F8" , color: "#201C31"}}>
      <div className="grid justify-items-center">
      <div >
        <img className="w-40 pb-2  " src={Banner}/>
      </div>
      <div className="">
      TailWind | React BASICS
      </div> 
    </div>
    </div>
    <div className=" text-white py-1  px-11 " style={{background : "#F4F3F8" , color : "#201C31"}}>
    <UseEffect />
    <UseState />  
    <FetchAPI />
    </div>
    
>>>>>>> f3a135d771a55ca35abd3ce15ff8d27aeb3b40a9
    </React.Fragment>
  );
}

export default App;
