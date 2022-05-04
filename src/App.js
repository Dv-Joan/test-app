import UseEffect from './Components/UseEffect';
import UseState from './Components/UseState';
import FetchAPI from './Components/FetchAPI';
import React from 'react';


function App() {

  return (
    <React.Fragment >
    <div className="text-5xl text-center  font-mono font-bold bg-gradient-to-r from-blue-600 to-cyan-400  text-white py-10 px-7 ">
      Learning <strong className="text-orange-500 italic tracking-tight">REACT | TailWind</strong> BASICS 
    </div>
    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-1  px-11 ">
    <UseEffect />
    <UseState />
    <FetchAPI />
    </div>
    
    </React.Fragment>
    
  );
}

export default App;
