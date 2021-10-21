import { Component } from "react";
import Numero from "./Numero";

class Numeros extends Component {

    state = {
        suma: 0,
        numeros: [Math.floor((Math.random() * 20) +1), Math.floor((Math.random() * 20) +1), Math.floor((Math.random() * 20) +1), Math.floor((Math.random() * 20) +1), Math.floor((Math.random() * 20) +1)]
    }

    sumar = (num) => {
        this.setState({
            suma: this.state.suma+num
        })
    }

    añadirNumeroNuevo = () => {
        this.state.numeros.push(Math.floor((Math.random() * 20) +1));
        this.setState({
            numeros: this.state.numeros
        })
    }

    render() {
        return(
            <div>
                <button onClick={() => this.añadirNumeroNuevo()}>Nuevo número</button>
                <h1>Suma actual: <span style={{color:"green"}}>{this.state.suma}</span></h1>
                {this.state.numeros.map((num, index) => {
                    return(<Numero numero={num} key={index} metodoPadre={this.sumar}/>)
                })}
            </div>
        );
    }

}

export default Numeros;