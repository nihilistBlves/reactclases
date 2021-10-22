import { Component } from "react";
import Pelicula from "./Rutas/Pelicula";
import Musica from "./Rutas/Musica";
import Television from "./Rutas/Television";
import Home from "./Rutas/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Router extends Component {

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cine" component={Pelicula} />
                    <Route path="/musica" component={Musica} />
                    <Route path="/television" component={Television} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;