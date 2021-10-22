import React, { Component } from 'react'

export default class ConjeturaCollatz extends Component {

    numero = React.createRef();

    state = {
        collatz: []
    }

    realizarConjetura = (e) => {
        e.preventDefault();

        if (this.numero.current.value != "") {
            var array = []
            var currentNum = this.numero.current.value;
            
            while(currentNum != 1) {
                if (currentNum % 2 == 0) {
                    //PAR
                    currentNum = currentNum/2;
                } else {
                    //IMPAR
                    currentNum = (currentNum*3)+1;
                }
                array.push(currentNum);    
            }

            this.setState({
                collatz: array
            });
        } else {
            this.setState({
                collatz: [""]
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>
                <hr/>
                <form>
                    <h3>Introduce un numero</h3>
                    <input type="number" ref={this.numero} onChange={this.realizarConjetura}/>
                    <br/> <br/> <hr/>
                    {this.state.collatz.map((num, index) => {
                        if (index != this.state.collatz.length-1) {
                            return(<span key={index} style={{fontWeight:"bold", fontSize:"30px"}}>{num}, </span>)
                        } else {
                            return(<span key={index}    style={{fontWeight:"bold", fontSize:"30px"}}>{num}</span>)
                        }
                    })}
                </form>
            </div>
        )
    }
}
