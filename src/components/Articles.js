import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import 'moment/locale/es';
import { global } from "../Global";
import defaultImage from "../assets/images/default.png";
import { Link } from "react-router-dom";

class Articles extends Component {

    url = global.url;

    state = {
        articles: [],
        status: null
    }

    componentDidMount() {
        var home = this.props.home;

        if(home === "true"){
            this.getLastArticles();    
        }else{
            this.getArticles();
        }
    }

    getArticles = () => {
        axios.get(this.url+"articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: "success"
                })
            })
    }

    getLastArticles = () => {
        axios.get(this.url+"articles/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: "success"
                })
            })
    }

    render() {

        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article className="article-item" id="article-template" key={article._id}>
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
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <Link to={"/blog/articulo/"+article._id}>Leer más</Link>
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