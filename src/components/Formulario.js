import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    biografiaRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    };

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = "hombre"
        /* console.log(this.nombreRef.current.value)
        console.log(this.apellidosRef.current.value)
        console.log(this.biografiaRef.current.value)
        console.log(this.generoHombreRef.current.value)
        console.log(this.generoMujerRef.current.value)
        console.log(this.generoOtroRef.current.value) */

        if(this.generoHombreRef.current.checked){
            genero = this.generoHombreRef.current.value;
        }else if(this.generoMujerRef.current.checked){
            genero = this.generoMujerRef.current.value;
        }else{
            genero = this.generoOtroRef.current.value;
        }

        var user = {
            nombre : this.nombreRef.current.value,
            apellidos : this.apellidosRef.current.value,
            biografia : this.biografiaRef.current.value,
            genero : genero
        }

        this.setState({
            user: user
        })

        console.log(user);

    }
    
    render() {

        if(this.state.user.nombre){
            var user = this.state.user;
        }
        
        return (
            <div id="formulario">
                {/* <Slider title="Formulario" size="slider-small"></Slider> */}
                <div className="center">
                    <div id="content">
                        <h2 className='subheader'>Formulario</h2>

                        {/* Mostrar datos del formulario */}
                        {this.state.user.nombre && 
                            <div id='userData'>
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Biografia: <strong>{user.biografia}</strong></p>
                                <p>Genero: <strong>{user.genero}</strong></p>
                            </div>
                        }
                        
                        {/* Crear un formulario */}
                        <form action="" className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" id="nombre" ref={this.nombreRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" id="apellidos" ref={this.apellidosRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="biografia">Biografia</label>
                                <textarea name="biografia" id="biografia" cols="30" rows="10" ref={this.biografiaRef}></textarea>
                            </div>
                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" id="hombre" value="hombre" ref={this.generoHombreRef}/>Hombre
                                <input type="radio" name="genero" id="mujer" value="mujer" ref={this.generoMujerRef}/>Mujer
                                <input type="radio" name="genero" id="otro" value="otro" ref={this.generoOtroRef}/>Otro
                            </div>
                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>
                    </div>

                    <Sidebar blog="false"></Sidebar>
                </div>
            </div>
        );
    }
}

export default Formulario;