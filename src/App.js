import React from 'react';
import ListaPlanets from './Componentes/ListaPlanets/listaplanets'
import NavBar from './Componentes/NavBar/NavBar'
import Container from './Componentes/Container/Container'
import Stars from './Componentes/Starts/Stars'
import FadeIn from 'react-fade-in'


function App() {
  return (
    <div className="App">
      <FadeIn>
        <Stars />
        <NavBar />
        <Container />
        <ListaPlanets />
      </FadeIn>
    </div>
  );
}

export default App;
