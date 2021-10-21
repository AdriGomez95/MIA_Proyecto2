

import logo from './logo.svg';
import './App.css';
import Pag1 from './pag1'

function App() {
  return (
    <div className="App">
    <h2>Hola mundo</h2>
    <button onClick={consuta}>prueba</button>
    <Pag1/>
    </div>
  );
}


const consuta = () =>{
  console.log("peticion realizada");
}

export default App;

