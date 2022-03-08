import React, { Component, useState } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';
import { useLocation, useSearchParams, useParams } from 'react-router-dom';



class Search extends Component {

    render() {

        let search = window.location.pathname.split("/")[3];
        
        return (
            <div id="search">
                <Slider title={"Busqueda: "+search} size="slider-small"></Slider>
                <div className="center">
                    <div id="content">
                        <Articles search={search}/>
                    </div>

                    <Sidebar blog="true"></Sidebar>
                </div>
            </div>
        );
    }
}

export default Search;

/* export default function Search() {

    let search = useParams().search;

    return (
        <div id="search">
            <Slider title={"Busqueda: "+search} size="slider-small"></Slider>
            <div className="center">
                <div id="content">
                    <Articles search={search}/>
                </div>

                <Sidebar blog="true"></Sidebar>
            </div>
        </div>
    );
} */