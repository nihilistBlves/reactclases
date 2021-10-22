import React, { Component } from 'react'

export default class EjemploSimple extends Component {

    //Creamos las variables de referencia.
    //Estas variables apuntan a objetos FORM.
    //No tienen el valor directo de la caja.
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();

    state = {
        user: null
    }

    recibirDatos = (e) => {
        //Debemos de cortar la propagacion del evento submit
        e.preventDefault();
        //Para recuperar el value de las referencias se hace asi:
        // ref.current.value
        console.log(this.cajaNombre.current.value);
        this.setState({
            user: {
                nombre: this.cajaNombre.current.value,
                edad: this.cajaEdad.current.value
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Ejemplo simple de formularios</h1>
                <form onSubmit={this.recibirDatos}>
                    <label>Nombre</label>
                    <input type="text" ref={this.cajaNombre} onChange={this.recibirDatos}/> <br/>
                    <label>Edad</label>
                    <input type="number" ref={this.cajaEdad} onChange={this.recibirDatos}/> <br/>
                    <button>Enviar datos</button>
                </form>
                {this.state.user && (
                <h2 style={{color:"lightseagreen"}}>Nombre: {this.state.user.nombre} | Edad: {this.state.user.edad}</h2>
                )}
            </div>
        )
    }
}
