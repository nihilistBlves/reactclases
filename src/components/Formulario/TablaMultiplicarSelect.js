import React, { Component } from 'react'

export default class TablaMultiplicarSelect extends Component {

    optionSeleccionado = React.createRef();

    state = {
        resultados: []
    }

    cargarNumeros = () => {
        var options = [];
        for (var i = 0; i < 10; i++) {
            var random = Math.floor(Math.random() * 100) + 1;
            options.push(<option key={i} value={random}>{random}</option>);
        }
        return options;
    }

    mostrarTabla = () => {
        var array = [];
        var numero = this.optionSeleccionado.current.value;

        for(var i = 1; i < 11; i++) {
            array.push(<tr key={i}><td>{numero} x {i}</td><td>{numero*i}</td></tr>)
        }

        this.setState({
            resultados: array
        });
    }

    render() {
        return (
            <div>
                <h1>Tabla de multiplicar por select</h1>
                <form>
                    <label>Seleccione un número: </label>
                    <select ref={this.optionSeleccionado} onChange={this.mostrarTabla}>
                        {this.cargarNumeros().map((option, index) => {
                            return(option);
                        })}
                    </select>
                </form>
                <br/>
                <hr/>
                <table border="1px" style={{display:"inline-block"}}>
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.resultados}
                    </tbody>
                </table>
            </div>
        )
    }
}
