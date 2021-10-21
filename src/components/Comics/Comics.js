import { Component } from "react";
import Comic from "./Comic";
import "./Comics.css";

class Comics extends Component {
    //Creamos una variable state para almacenar los objetos comics
    state = {
        comics: [
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña"
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno"
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              descripcion: "Yo soy Groot"
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores"
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons"
            },
            {
              titulo: "Batman",
              imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
              descripcion: "Murcielago"
            }
                ],
        favorito: null
    }

    seleccionarFavorito = (comic) => {
        this.setState({
            favorito: comic
        });
    }

    eliminarComic = (index) => {
        //splice() recibe dos parametros
        //1) Indice a eliminar
        //2) Numero de elementos a eliminar
        this.state.comics.splice(index, 1);
        this.setState({
            comics: this.state.comics
        });
    }

    nuevoComic = () => {
        var titulo = document.getElementById("cajaTitulo").value;
        var desc = document.getElementById("cajaDescripcion").value;
        var img = document.getElementById("cajaImagen").value;
        var comic = {
            titulo: titulo,
            descripcion: desc,
            imagen: img
        }
        this.state.comics.push(comic);
        this.setState({
            comics: this.state.comics
        });
    }

    modificarComic = (index) => {
        var titulo = document.getElementById("cajaTitulo").value;
        var desc = document.getElementById("cajaDescripcion").value;
        var img = document.getElementById("cajaImagen").value;
        var comicModificado = {
            titulo: titulo,
            descripcion: desc,
            imagen: img
        }

        this.state.comics.map((comic, i) => {
            if (i == index) {
                comic = comicModificado;
            }
        });

        this.setState({
            comics: this.state.comics
        });
    }
 
    render() {
        return(
            <div>
                <h1 style={{color:"lightseagreen"}}>Ejemplo Comics - Colecciones de objetos</h1>
                <label>Titulo</label>
                <input type="text" id="cajaTitulo"/><br/>
                <label>Descripcion</label>
                <input type="text" id="cajaDescripcion"/><br/>
                <label>Imagen</label>
                <input type="text" id="cajaImagen"/><br/>
                <button onClick={() => this.nuevoComic()}>Nuevo comic</button>
                <hr/>
                {this.state.favorito ?
                (<div><h2>Comic favorito</h2><Comic comic={this.state.favorito}/></div>) :
                <h2>No hay comic favorito</h2>
                }
                <hr/>
                {this.state.comics.map((comic, index) => {
                    return(<Comic comic={comic} index={index} key={index} seleccionarFavorito={this.seleccionarFavorito} eliminarComic={this.eliminarComic} modificarComic={this.modificarComic}/>);
                })}
            </div>
        );
    }

}

export default Comics;