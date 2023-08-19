import './App.css';
import Testimonio from "./components/testimonio";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
        <Testimonio 
          nombre='Marcelo'
          pais='Suecia'
          imagen='Marcelo'
          cargo='Ingeniero'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
          
          <Testimonio 
          nombre='Juan'
          pais='Singapur'
          imagen='Juan'
          cargo='Medico'
          empresa='Amazon'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
          
          <Testimonio 
          nombre='Pablo'
          pais='Reino unido'
          imagen='Pablo'
          cargo='Desarrollador'
          empresa='Facebook'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
      </div>
    </div>
  );
}

export default App;
