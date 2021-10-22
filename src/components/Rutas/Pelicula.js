import React, { Component } from 'react'
import imagenpelicula from '../../assets/images/pelicula.jpg';

export default class Pelicula extends Component {
    render() {
        return (
            <div>
                <h1>Estoy en Pelicula</h1>
                <img src={imagenpelicula} style={{height:"400px"}}/>
            </div>
        )
    }
}
