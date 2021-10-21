import React, { Component } from "react";

//COMPONENTE HIJO
class Deporte extends Component {

    metodoHijo = () => {
        this.props.metodoPadre(this.props.nombre);
    }

    render() {
        return(
            <div style={{backgroundColor:"lightseagreen"}}>
                <h1>Deporte:
                    <span style={{color:"white"}}>
                        {this.props.nombre}
                    </span>
                </h1>
                <button onClick={() => {this.metodoHijo()}}>
                    Seleccionar como favorito
                </button>
            </div>
        );
    }

}

export default Deporte;