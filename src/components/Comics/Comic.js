import { Component } from "react";

class Comic extends Component {

    render() {
        return(
            <div class="comic">
                <h2>{this.props.comic.titulo}</h2>
                <p>{this.props.comic.descripcion}</p>
                <img src={this.props.comic.imagen}/> <br/>
                <button onClick={() => this.props.seleccionarFavorito(this.props.comic)}>Favorito</button>
                <button onClick={() => this.props.eliminarComic(this.props.index)}>Eliminar</button>
                <button onClick={() => this.props.modificarComic(this.props.index)}>Modificar</button>
            </div>
        );
    }

}

export default Comic;