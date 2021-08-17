import React from 'react';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';

function App() {

  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <Team />
    </>
  );
}

export default App;
