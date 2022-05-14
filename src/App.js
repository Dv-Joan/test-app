import UseEffect from './Components/UseEffect';
import UseState from './Components/UseState';
import FetchAPI from './Components/FetchAPI';
import React from 'react';
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
    
    </React.Fragment>
    
  );
}

export default App;
