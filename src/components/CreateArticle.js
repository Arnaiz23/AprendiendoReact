import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { global } from "../Global";
import Sidebar from "./Sidebar";
import SimpleReactValidator from "simple-react-validator";
import swal from 'sweetalert';

// Validacion formularios y alertas

class CreateArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();

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
                content: this.contentRef.current.value
            }
        });
    }

    saveArticle = (e) => {
        e.preventDefault();

        // Rellenar state con formulario
        this.changeState();

        if (this.validator.allValid()) {
            // Hacer una peticion por post para guardar articulo
            axios.post(this.url + 'save', this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
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
                                        swal("Articulo creado", "Articulo creado correctamente", "success");
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                        swal("Error", "Articulo no creado", "error");
                                    }
                                });

                        } else {
                            this.setState({
                                status: 'success'
                            });
                            swal("Articulo creado", "Articulo creado correctamente", "success");
                        }
                    } else {
                        this.setState({
                            status: 'failed'
                        });
                    }
                });
        }else{
            
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

        return (
            <div className="center">
                <section id="content">
                    <h2 className="subheader">Crear artículo</h2>
                    <form className="mid-form" onSubmit={this.saveArticle}>

                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} />

                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>

                            {this.validator.message('content', this.state.article.content, 'required')}
                            
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange} />
                        </div>

                        <input type="submit" value="guardar" className="btn btn-success" />
                    </form>
                </section>

                <Sidebar />
            </div>
        )
    }
}

export default CreateArticle;