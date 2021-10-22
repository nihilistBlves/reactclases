import { Component } from "react";
import imagenmusica from '../../assets/images/musica.jpg';

class Musica extends Component {
    
    render() {
        return (
            <div>
                <h1>Estoy en Musica</h1>
                <img src={imagenmusica} style={{height:"400px"}}/>
            </div>
        )
    }

}

export default Musica;