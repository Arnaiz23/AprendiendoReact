// import React from 'react';
import React, {Component} from 'react';

// class MiComponente extends React.Component{
class MiComponente extends Component{

    render(){
        /* return (
            <h1>Hola, soy el componente llamado MiComponente</h1>
        ); */

        let receta = {
            nombre: "Pizza",
            ingredientes: ["Tomate", "Queso", "Salchichas", "Chorizo"],
            calorias: 1000
        };
        
        return(
            <div>
                <h1>{"Receta: "+receta.nombre}</h1>
                <h2>{"Calorias: "+receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) =>{
                            return (
                                // *Se usa para identificar
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        );
    }

}

export default MiComponente;