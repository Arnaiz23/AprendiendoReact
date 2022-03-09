import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { global } from "../Global";
import Sidebar from "./Sidebar";
import SimpleReactValidator from "simple-react-validator";
import swal from 'sweetalert';
import defaultImage from "../assets/images/default.png";

// 1. Recoger el id del articulo de la url
// 2. Crear un metodo para sacar ese objeto del backed
// 3. Rellenar el formulario con esos datos
// 4. Actualizar el objeto haciendo una peticion al backend

class EditArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();

    articleId = window.location.pathname.split("/")[3];

    url = global.url;

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    validator = new SimpleReactValidator({
        messages: {
            required: 'Este campo es requerido'
        }
    });

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });
    }

    getArticle = (id) => {
        axios(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                })
            })
    }

    componentDidMount() {
        this.getArticle(this.articleId);
    }

    saveArticle = (e) => {
        e.preventDefault();

        // Rellenar state con formulario
        this.changeState();

        if (this.validator.allValid()) {
            // Hacer una peticion por post para guardar articulo
            axios.put(this.url + 'article/'+this.articleId, this.state.article)
                .then(res => {
                    if (res.data.articleUpdate) {
                        this.setState({
                            article: res.data.articleUpdate,
                            status: 'waiting'
                        });

                        // SUBIR LA IMAGEN
                        if (this.state.selectedFile != null) {

                            // Sacar id del articulo guardado
                            let articleId = this.state.article._id;

                            // Crear form data y añadir el fichero
                            const formData = new FormData();

                            // nombre, imagen, nombre para la imagen
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );

                            // Peticion AJAX
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.articleUpdate) {
                                        this.setState({
                                            article: res.data.articleUpdate,
                                            status: 'success'
                                        });
                                        swal("Articulo modificado", "Articulo modificado correctamente", "success");
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                        swal("Error", "Articulo no modificado", "error");
                                    }
                                });

                        } else {
                            this.setState({
                                status: 'success'
                            });
                            swal("Articulo modificado", "Articulo modificado correctamente", "success");
                        }
                    } else {
                        this.setState({
                            status: 'failed'
                        });
                    }
                });
        } else {

            this.setState({
                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();
        }


    }

    fileChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        });
    }

    render() {

        if (this.state.status === "success") return <Navigate to={'/blog'}></Navigate>

        let article = this.state.article;

        return (
            <div className="center">
                <section id="content">
                    <h2 className="subheader">Editar artículo</h2>

                    {this.state.article &&
                        <form className="mid-form" onSubmit={this.saveArticle}>

                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} defaultValue={article.title}/>

                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" ref={this.contentRef} onChange={this.changeState} defaultValue={article.content}></textarea>

                                {this.validator.message('content', this.state.article.content, 'required')}

                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange} />
                                <div className="image-wrap">
                                    {article.image ?
                                        (
                                            <img src={this.url + "get-image/" + article.image} alt={article.title}  className="imgArticle"/>
                                        ) : (
                                            <img src={defaultImage} alt={article.title}  className="imgArticle"/>
                                        )
                                    }
                                </div>
                            </div>

                            <input type="submit" value="guardar" className="btn btn-success" />
                        </form>
                    }

                    {!this.state.article &&
                        <React.Fragment>
                            <h2 className="subheader">Cargando</h2>
                            <p>Espere unos segundos...</p>
                        </React.Fragment>
                    }


                </section>

                <Sidebar />
            </div>
        )
    }
}

export default EditArticle;