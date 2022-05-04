import UseEffect from './Components/UseEffect';
import UseState from './Components/UseState';
import FetchAPI from './Components/FetchAPI';


function App() {

  return (
    // Implementar React Fragment para centrar el texto del Componente APP 
    <div className="text-3xl font-mono font-bold bg-purple-600  text-white py-5 px-7 ">
      Desde el componente principal APP
    <UseEffect />
    <UseState />
    <FetchAPI />

    </div>
    
  );
}

export default App;
