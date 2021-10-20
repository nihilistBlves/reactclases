import { Component } from "react";

function miFuncion() {
    console.log("Soy una función fuera de la clase");
}

class Contador extends Component {
    //Todos los elementos de la clase solo pueden ser invocados
    //usando this.elemento

    //VARIABLE A NIVEL DE CLASE
    contador = 1;
    //METODO A NIVEL DE CLASE
    incrementarContador = () => {
        console.log("Soy un método dentro de la clase: " + this.contador);
        this.contador++;
    };

    //Podemos utilizar variables de estado y modificarlas cuando deseemos
    //Si queremos crear una variable de estado desde el inicio (no en un evento)
    //se utiliza state de la clase.
    //Con state de la clase, primero declaramos las variables de estado y
    //luego podremos modificarlas en el metodo setState
    //  state = { variable1: valor1, variable: valor2 }
    state = { valor: parseInt(this.props.Inicio) };
    //Creamos un metodo para cambiar el valor
    incrementarValor = () => {
        this.setState({
            valor: this.state.valor + 1
        });
    };

    render() {
        var valor = 0;
        const miMetodoRender = () => {
            valor += 1;
            console.log("Soy un método dentro de render(): " + valor);
        };

        return(
            <div>
                <h1>Primer component JSX</h1>
                <h2 style={{color:"blue"}}>Inicio: { this.props.Inicio }</h2>
                <h2 style={{color:"red"}}>Variable estado: { this.state.valor }</h2>
                {/* Si estamos utilizando métodos de clase, podemos llamarlo con una sintaxis más fácil */}
                <button onClick={ this.incrementarValor }>Incrementar variable de State</button>
                <button onClick={ () => {miMetodoRender(); miFuncion();this.incrementarContador();} }>Pulsa para acción</button>
            </div>
        );
    }

}

export default Contador;