import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';

class Router extends Component {

    render() {
        return (

            <BrowserRouter>
                {/* // Configurar rutas y paginas */}
                <Routes>

                    <Route path="/" element={<Peliculas />} />
                    <Route path="/ruta-prueba" element={<SeccionPruebas />} />
                    <Route path="/segunda-ruta" element={<MiComponente />} />

                    <Route path="/pruebas" element={
                        <div id="content">
                            <h2 className="subheader">Página de pruebas</h2>
                        </div>
                    } />

                    <Route path="*" element={<Error />} />

                </Routes>

            </BrowserRouter>

        );
    }

}

export default Router;