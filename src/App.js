import React from 'react';
import './App.css';
import Routes from './routes'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes />
    </div>
  )
}

export default App;
