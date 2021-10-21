import { Component } from "react";
import Deporte from "./Deporte";

//COMPONENTE PADRE
class Deportes extends Component {
    //Aqui tendremos un list con todos los deportes
    //y será estático
    
    state = {
        deporteFavorito: "",
        deportes: ["Fútbol", "Baloncesto", "Fútbol americano", "Béisbol", "Hockey", "Tenis", "Petanca"]
    }

    seleccionarFavorito = (favorito) => {
        this.setState({
            deporteFavorito: favorito
        });
    }

    insertarDeporte = () => {
        this.state.deportes.push("Volleybal");
        this.setState({
            deportes: this.state.deportes
        })
    }

    render() {
        return(
            <div>
                <h2>Su deporte favorito es: <span style={{color:"red"}}>{this.state.deporteFavorito}</span></h2>
                <button onClick={() => this.insertarDeporte()}>Nuevo deporte</button>
                {this.state.deportes.map((deporte, index) => {
                    return(<Deporte nombre={deporte} metodoPadre={this.seleccionarFavorito} key={index}/>)
                })}
            </div>
        );
    }

}

export default Deportes;