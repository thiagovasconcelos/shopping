import React from 'react';
import './App.css';
import Header from './componets/Header';
import Filters from './componets/Filters';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Filters/>
      <Footer/>
    </div>
  );
}

export default App;
