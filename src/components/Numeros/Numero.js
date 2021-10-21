import React, { Component } from "react";

class Numero extends Component {

    metodoSumarDelPadre = (num) => {
        this.props.metodoPadre(num);
    }

    render() {
        return(
            <React.Fragment>
                <h2>Número <span style={{color:"lightseagreen"}}>{this.props.numero}</span></h2>
                <button onClick={() => this.metodoSumarDelPadre(this.props.numero)}>Sumar número</button>
            </React.Fragment>            
        );
    }

}

export default Numero;