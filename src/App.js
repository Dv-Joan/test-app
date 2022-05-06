import UseEffect from './Components/UseEffect';
import UseState from './Components/UseState';
import FetchAPI from './Components/FetchAPI';
import React from 'react';


function App() {

  return (
    <React.Fragment >
    <div className="text-5xl text-center  font-mono font-bold py-10 px-7 " style={{background : "#F4F3F8" , color: "#201C31"}}>
      REACT | TailWind BASICS 
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
