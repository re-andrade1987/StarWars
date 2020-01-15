import React from 'react';
import ListaPlanets from './Componentes/ListaPlanets/listaplanets';
import NavBar from './Componentes/NavBar/NavBar'
import Container from './Componentes/Container/Container'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container/>
      <ListaPlanets/>
    </div>
  );
}

export default App;
