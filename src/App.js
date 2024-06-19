import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <div className="content"/>        
      <Footer />  
    </div>
  );
}

export default App;