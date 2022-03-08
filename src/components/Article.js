import React, { Component } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { global } from "../Global";
import Moment from "react-moment";
import "moment/locale/es";

import Sidebar from "./Sidebar";
import defaultImage from "../assets/images/default.png";

class Article extends Component {

    url = global.url;

    state = {
        article: false,
        status: null
    };

    componentDidMount() {
        this.getArticle();
    }

    getArticle = () => {
        var article = window.location.pathname.split("/")[3];

        axios(this.url + "article/" + article)
            .then(response => {
                this.setState({
                    article: response.data.article,
                    status: "success"
                })
            })
            .catch(err => {
                this.setState({
                    article: false,
                    status: "success"
                })
            })
    }

    render() {
        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">
                    {/* <!-- Listado articulos --> */}

                    {this.state.article &&
                        <div id="article">
                            <article className="article-item article-detalle">
                                <div className="image-wrap">
                                    {article.image ?
                                        (
                                            <img src={this.url + "get-image/" + article.image} alt={article.title}  className="imgArticle"/>
                                        ) : (
                                            <img src={defaultImage} alt={article.title}  className="imgArticle"/>
                                        )
                                    }
                                </div>
                                <div>
                                    <h1 className="subheader">{article.title}</h1>
                                    <span className="date">
                                        <Moment locale="es" fromNow>{article.date}</Moment>
                                    </span>
                                    <p>
                                        {article.content}
                                    </p>

                                    <a href="#" className="btn btn-danger">Eliminar</a>
                                    <a href="#" className="btn btn-warning">Editar</a>

                                </div>
                            </article>
                        </div>
                    }

                    {!this.state.article && this.state.status === "success" &&
                        <div id="article">
                            <h2 className="subheader">El artículo no existe</h2>
                            <p>Intentalo de nuevo más tarde</p>
                        </div>
                    }

                    {this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando</h2>
                            <p>Espere unos segundos...</p>
                        </div>
                    }
                </section>

                <Sidebar />
            </div>
        )
    }
}

export default Article;