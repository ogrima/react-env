import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Oi {process.env.REACT_APP_NAME} </p>
      <p>Version: {process.env.REACT_APP_VERSION} </p>
      <p>OS: {process.env.REACT_APP_ENV} </p>

    </div>
  );
}

export default App;
