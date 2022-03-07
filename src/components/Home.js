import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <Slider title="Bienvenido al Curso de React" btn="Ir al blog" size="slider-big"></Slider>
                <div className="center">
                    <div id="content">
                        <h2 className='subheader'>Últimos artículos</h2>
                    </div>

                    <Sidebar></Sidebar>
                </div>
            </div>
        );
    }
}

export default Home;