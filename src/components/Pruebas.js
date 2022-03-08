import React, { Component } from 'react';

class Pruebas extends Component {
    render() {
        // var id = props.match.params.id;

        console.log(this.props);

        return (
            <div id="content">
                <h2 className="subheader">Pruebas2</h2>
                {/* <h3>{id}</h3> */}
            </div>
        )
    }
}

export default Pruebas;