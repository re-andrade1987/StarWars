import React from 'react';
import PersonStarWars from './Componentes/Lista/PersonStarWars';
import NavBar from './Componentes/NavBar/NavBar'
import Container from './Componentes/Container/Container'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container/>
      <PersonStarWars/>
    </div>
  );
}

export default App;
