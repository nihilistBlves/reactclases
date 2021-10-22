import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador/Contador';
import DibujosComplejos from './components/DibujosComplejos/DibujosComplejos';
import Deportes from './components/Deportes/Deportes';
import Numeros from './components/Numeros/Numeros';
import Comics from './components/Comics/Comics';
import Router from './components/Router';
import Home from './components/Rutas/Home';
import Musica from './components/Rutas/Musica';
import Television from './components/Rutas/Television';
import Pelicula from './components/Rutas/Pelicula';
import MenuRutas from './components/Rutas/MenuRutas';
import EjemploSimple from './components/Formulario/EjemploSimple';
import ConjeturaCollatz from './components/Formulario/ConjeturaCollatz';
import TablaMultiplicar from './components/Formulario/TablaMultiplicar';
import TablaMultiplicarSelect from './components/Formulario/TablaMultiplicarSelect';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <TablaMultiplicarSelect />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
