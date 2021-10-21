import { Component } from "react";

class DibujosComplejos extends Component {

    dibujarNumeros = () => {
        //Si tenemos un bucle, vamos a visualizar el dibujo que
        //nos ofrece como resultado.
        //La forma de realizarlo es almacenar dentro de una lista
        //todo el contenido html
        //Tiene un metodo push() que permite ir añadiendo elementos
        //de forma dinámica
        var lista = [];
        for (var i = 0; i <= 5; i++) {
            lista.push(<li key={i}>Número {i}</li>);
        }
        return lista;
    }

    //Declaramos un array en State y lo recorremos dentro de render()
    state = {
        nombres: ["Alejo", "Carlos", "David", "Mansi"]
    };

    insertarNombre = (nombre) => {
        this.state.nombres.push(nombre);
        this.setState({
            nombres: this.state.nombres
        });
    }

    render() {
        return(
            <div>
                <h1>Dibujos con bucles</h1>
                <ul>{this.dibujarNumeros()}</ul>
                {this.state.nombres.map((name, index) => {
                    return(
                        <h3 key={index}>{name}</h3>
                    );
                })}
                <button onClick={() => {this.insertarNombre("Doraemon")}}>Insertar nombre</button>
            </div>
        );
    }

}

export default DibujosComplejos;