import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { Link, NavLink } from "react-router-dom";

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
                                {/* <a href="/">Inicio</a> */}
                                <NavLink to="/home" activeclassname="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" activeclassname="active">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario" activeclassname="active">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/peliculas" activeclassname="active">Peliculas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas2" activeclassname="active">Pagina 2</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

}

export default Header;