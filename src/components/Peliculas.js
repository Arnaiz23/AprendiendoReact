import React, { Component } from 'react';
import MensajeEstatico from './MensajeEstatico';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {
        peliculas: [
            { title: 'Batman vs Superman', image: 'https://hbomax-images.warnermediacdn.com/images/GXvuNTw6T2IaEUwEAAAT-/tileburnedin?size=1280x720&partner=hbomaxcom&language=es-419&v=01cbb8673567f9c465a09bd397867f07&host=art-gallery-latam.api.hbo.com&w=1280' },
            { title: 'Gran torino', image: 'https://static.motor.es/fotos-noticias/2013/05/constantino-romero-y-clint-eastwood-una-pareja-de-cine-que-se-despidio-en-un-gran-torino-201313511_1.jpg' },
            { title: 'Looper', image: 'https://images.mubicdn.net/images/film/97066/cache-59871-1547103610/image-w1280.jpg' },
        ],
        nombre: "Adrian Arnaiz",
        pelicula: ''
    };

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        peliculas[0].title = 'Batman Begins';

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula) => {
        // console.log("Favorita Marcada");
        // console.log(event);
        this.setState({
            pelicula: pelicula.title
        })
    }

    render() {

        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }
        
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>

                <p>Selección de las películas favoritas de {this.state.nombre}</p>
                <p>
                    <input type="button" onClick={this.cambiarTitulo} value="Cambiar titulo de batman" />
                </p>

                {this.state.pelicula &&
                    <p style={pStyle}>
                        <strong>La pelicula favorita es: </strong>
                        <span>{this.state.pelicula}</span>
                    </p>
                }


                {/* Crear componente pelicula */}

                {/* Metodo pero menos efectivo */}
                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, id) => {
                            return (
                                <Pelicula key={id} pelicula={pelicula} marcarFavorita={this.favorita}></Pelicula>
                            );
                        })
                    }
                </div>

            </div>
        );
    }

}

export default Peliculas;