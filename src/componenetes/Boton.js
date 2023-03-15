import '../css/botones.css'

function Boton({texto, botonClick, manejarclick}) {

    return (
     <button 
      className={ botonClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={ manejarclick }>
        {texto}
     </button> 

    );

}

export default Boton;
