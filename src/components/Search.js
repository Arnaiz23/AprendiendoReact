import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

import { useSearchParams } from 'react-router-dom';

class Search extends Component {

    render() {

        console.log(this.props);
        
        return (
            <div id="search">
                <Slider title={"Busqueda:"} size="slider-small"></Slider>
                <div className="center">
                    <div id="content">
                        <Articles/>
                    </div>

                    <Sidebar blog="true"></Sidebar>
                </div>
            </div>
        );
    }
}

export default Search;

/* export default function Search(){

    let {URLSearchParams} = useSearchParams();
    console.log(URLSearchParams);

    return (
        <div id="search">
            <Slider title={"Busqueda:"} size="slider-small"></Slider>
            <div className="center">
                <div id="content">
                    <Articles />
                </div>

                <Sidebar blog="true"></Sidebar>
            </div>
        </div>
    );
} */