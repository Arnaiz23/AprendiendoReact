import React, { Component } from "react";

class Sidebar extends Component {

    render() {
        return (
            <aside id="sidebar">
                {this.props.blog === "true" &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <a href="#" className="btn-success btn">Crear artículo</a>
                    </div>
                }
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el articulo que buscas</p>
                    <form action="">
                        <input type="text" name="search" />
                        <input type="submit" value="Buscar" name="submit" className="btn" />
                    </form>
                </div>
            </aside>
        );
    }

}

export default Sidebar;