import React, { Component } from "react";

class Pelicula extends Component {

    // *Ya que no se pueden pasar en el onclick, se hace esto
    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula)
    }

    render() {

        const { title, image } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={title} />
                </div>
                <div>
                    <h2>{title}</h2>
                    <span className="date">
                        Hace 5 minutos
                    </span>
                    <a href="article.html">Leer más</a>
                    <button onClick={this.marcar}>Marcar como favorita</button>
                </div>
            </article>
        )

    }

}

export default Pelicula;