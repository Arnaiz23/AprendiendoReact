/* import React, { Component } from "react";

class Footer extends Component {

    render() {
        return (
            <footer id="footer">
                <div className="center">
                    <p>&copy; Master en frameworks para JavaScript</p>
                </div>
            </footer>
        );
    }

}

export default Footer; */

// *****************************************
// * Estatico ya que no se cambiara los datos
// *****************************************

import React, { Component } from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="center">
                <p>&copy; Master en frameworks para JavaScript</p>
            </div>
        </footer >
    );
}

export default Footer;