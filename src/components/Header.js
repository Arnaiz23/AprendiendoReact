import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center center2">
                    {/* <!-- LOGO --> */}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="logotipo"/>
                        <span id="brand">
                        <strong>Curso</strong>React
                        </span>
                    </div>

                    {/* <!-- MENU --> */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="javascript:void(0)">Inicio</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="formulario.html">Formulario</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Pagina 1</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Pagina 2</a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- LIMPIAR FLOTADOS --> */}
                    {/* <!-- <div className="clearfix"></div> --> */}
                </div>
            </header>
        );
    }

}

export default Header;