import './App.css';
import logo from './img/logo.png'
import Boton from './componenetes/Boton.js'
import Contador from './componenetes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarclick = () => {
    setNumClicks(numClicks + 1);

  }

  const reiniciarContador = () => {
   setNumClicks(0);
  };
  
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='logo-contenedor'>
        <h1>Contador de Click</h1>
          <img 
            className='logo'
            src={logo}
            alt='logo'
          />
        </div>
        <div className='contenedor-contador'>
          <Contador numClicks={numClicks}
          />          
        <Boton 
          texto='Click'
          botonClick={true}
          manejarclick={manejarclick}
          />
        <Boton 
          texto='Reiniciar'
          botonClick={false}
          manejarclick={reiniciarContador}
        />
        </div>
      </div>
    </div>
    
  );
}

export default App;
