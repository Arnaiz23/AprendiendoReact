import React, { Component } from 'react';

class Slider extends Component {

    render() {
        // *Sacar los props
        console.log(this.props);
        
        return (
            <div id="slider" className="slider-big">
                <h1>Bienvenido al Curso de React</h1>
                <a href="blog.html" className="btn-white">Ir al blog</a>
            </div>
        );
    }

}

export default Slider;