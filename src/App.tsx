import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './Components/home';
import Header from './Components/header';
// import '../src/styles/index.scss'
import '../src/styles/index.scss'
import Handles from './Components/handles';

function App() {
  return (
    <HelmetProvider>

      <div className="App">
        <Handles></Handles>
      </div>
    </HelmetProvider>
  );
}

export default App;
