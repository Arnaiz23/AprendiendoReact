import React, { Component } from "react";
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {

    contador = 0;

    // *Forma larga
    /* constructor(props){
        super(props);

        this.state = {
            contador: 0
        }
    } */

    state = {
        contador : 0
    }

    sumar = (e) => {
        // this.contador++;
        this.setState({
            contador: (this.state.contador + 1)
        })
    }

    restar = (e) => {
        // this.contador--;
        this.setState({
            contador: (this.state.contador - 1)
        })
    }

    render() {
        return (
            
            <section className="componentes" id="content">

                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Hola, bienvenido al curso de react de Victor Robles WEB
                </p>
                
                <h2 className="subheader">Componentes</h2>
                <MiComponente></MiComponente>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="sumar" onClick={this.sumar}/>
                    {/* <input type="button" value="sumar" onClick={this.sumar.bind(this)}/> */}
                    <input type="button" value="restar" onClick={this.restar} />
                </p>

            </section>
        );
    }

}

export default SeccionPruebas;