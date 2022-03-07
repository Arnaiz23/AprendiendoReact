import React, { Component } from "react";
import axios from "axios";
import { global } from "../Global";
import defaultImage from "../assets/images/default.png";

class Articles extends Component {

    url = global.url;

    state = {
        articles: [],
        status: null
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = () => {
        axios.get(this.url+"articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: "success"
                })

                console.log(this.state);
            })
    }

    render() {

        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            {article.image ? 
                                (
                                    <img src={this.url+"get-image/"+article.image} alt="paisaje"/>
                                ) : (
                                    <img src={defaultImage} alt="paisaje"/>
                                )
                            }
                        </div>
                        <div>
                            <h2>{article.title}</h2>
                            <span className="date">
                                H{article.date}
                            </span>
                            <a href="article.html">Leer más</a>
                        </div>
                    </article>
                )
            })

            return (
                <div id="articles">
                    {listArticles}
                </div>
            )
        } else if (this.state.articles == 0 && this.state.status === "success") {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay artículos para mostrar</h2>
                    <p>Todavia no hay contenido en esta seccion</p>
                </div>
            )
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere</p>
                </div>
            )
        }
    }
}

export default Articles;