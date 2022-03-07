import React, { Component } from 'react';
import MensajeEstatico from './MensajeEstatico';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Peliculas extends Component {

    state = {

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

    // Antes de que se cargue
    componentWillMount() {
        this.setState({
            peliculas: [
                { title: 'Batman vs Superman', image: 'https://hbomax-images.warnermediacdn.com/images/GXvuNTw6T2IaEUwEAAAT-/tileburnedin?size=1280x720&partner=hbomaxcom&language=es-419&v=01cbb8673567f9c465a09bd397867f07&host=art-gallery-latam.api.hbo.com&w=1280' },
                { title: 'Gran torino', image: 'https://static.motor.es/fotos-noticias/2013/05/constantino-romero-y-clint-eastwood-una-pareja-de-cine-que-se-despidio-en-un-gran-torino-201313511_1.jpg' },
                { title: 'Looper', image: 'https://images.mubicdn.net/images/film/97066/cache-59871-1547103610/image-w1280.jpg' },
            ],
            nombre: "Adrian Arnaiz",
            pelicula: ''
        })
    }

    // Cuando se carga
    /* componentDidMount() {
        alert("Se acaba de cargar el componente");
    } */

    render() {

        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }


        // -----------OPCION 2---------------------
        let favorita = {};

        if (this.state.pelicula) {
            favorita = (
                <p style={pStyle}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{this.state.pelicula}</span>
                </p>
            )
        } else {
            favorita = (
                <div>
                    <strong>No hay ninguna pelicula favorita</strong>
                </div>
            )
        }

        // ----------------------------------------

        return (
            <React.Fragment>
                <div id="peliculas">
                    <Slider title="Peliculas" size="slider-small"></Slider>

                    <div id="content" className="peliculas">
                        <h2 className="subheader">Peliculas</h2>

                        <p>Selección de las películas favoritas de {this.state.nombre}</p>
                        <p>
                            <input type="button" onClick={this.cambiarTitulo} value="Cambiar titulo de batman" />
                        </p>

                        {/* --------------OPCION 1------------- */}
                        {/* Una condicion */}
                        {/* {this.state.pelicula &&
                        <p style={pStyle}>
                            <strong>La pelicula favorita es: </strong>
                            <span>{this.state.pelicula}</span>
                        </p>
                    } */}

                        {/* 2 condiciones */}
                        {/* {this.state.pelicula ?
                        (
                            <p style={pStyle}>
                                <strong>La pelicula favorita es: </strong>
                                <span>{this.state.pelicula}</span>
                            </p>
                        ) : (
                            <div>
                                <strong>No hay ninguna pelicula favorita</strong>
                            </div>
                        )
                    } */}

                        {/* ------------OPCION 2------------------- */}
                        {favorita}


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
                    <Sidebar blog="false"></Sidebar>
                </div>
            </React.Fragment>
        );
    }

}

export default Peliculas;