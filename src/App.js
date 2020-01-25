import React from 'react';
import ListaPlanets from './Componentes/ListaPlanets/listaplanets';
import NavBar from './Componentes/NavBar/NavBar'
import Container from './Componentes/Container/Container'
import Stars from './Componentes/Starts/Stars'

function App() {
  return (
    <div className="App">
      <Stars/>
      <NavBar/>
      <Container/>
      <ListaPlanets/>
    </div>
  );
}

export default App;
