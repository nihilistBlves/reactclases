import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    cajaNumero = React.createRef();

    state = {
        tablaBody: []
    }

    generarTabla = () => {
        var numero = this.cajaNumero.current.value;
        var array = []
        for (var i = 1; i < 11; i++) {
            var tr = <tr key={i}>
                <td>{numero} x {i}</td>
                <td>{numero*i}</td>
            </tr>;
            array.push(tr);
            this.setState({
                tablaBody: array
            })
        }  
    }

    render() {
        return (
            <div>
                <h1>Tablas de multiplicar</h1>
                <hr/>
                <form>
                    <h3>Introduce un numero</h3>
                    <input type="number" ref={this.cajaNumero} onChange={this.generarTabla}/>
                </form>
                <hr/>
                <table border="1px" style={{display:"inline-block"}}>
                    <thead>
                        <tr>
                            <th>Operación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tablaBody.map((tr, index) => {
                            return(tr);
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
