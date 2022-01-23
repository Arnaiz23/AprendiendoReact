import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// *Importar componentes
// import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SeccionPruebas from './components/SeccionPruebas';
import Router from './Router';

function HolaMundo(nombre) {
  let presentacion = <h2>Hola, soy {nombre}</h2>;  //Objeto
  /* let presentacion = <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Edad</h3>
  </div>; */
  return presentacion;
}

function App() {
  let nombre = "Adrian Arnaiz";


  return (
    <div className="App">

      <Header></Header>
      <Slider titulo="Prueba"></Slider>

      <div class="center">
        {/* <Peliculas></Peliculas> */}

        <Router />

        <Sidebar></Sidebar>
      </div>


      <Footer></Footer>
    </div>
  );
}

export default App;
