import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Pruebas from './components/Pruebas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';

class Router extends Component {

    render() {
        return (

            <BrowserRouter>
                <Header></Header>

                    {/* // Configurar rutas y paginas */}
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/ruta-prueba" element={<SeccionPruebas />} />
                        <Route path="/segunda-ruta" element={<MiComponente />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/busqueda/:search" element={<Search />} />
                        <Route path="/formulario" element={<Formulario />} />
                        <Route path="/peliculas" element={<Peliculas />} />
                        <Route path="/blog/articulo/:id" element={
                            <h1>Articulo</h1>
                        }/>

                        <Route path="/pruebas2/:id" element={<Pruebas />} />
                        <Route path="/pruebas" element={
                            <div id="content">
                                <h2 className="subheader">Página de pruebas</h2>
                            </div>
                        } />

                        <Route path="*" element={<Error />} />

                    </Routes>

                <Footer></Footer>
            </BrowserRouter>

        );
    }

}

export default Router;