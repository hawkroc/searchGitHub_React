import React, { Component } from 'react';
import logo from './../public/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
 
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Peng</h2>
        </div>
        <p className="App-intro">
         peng's test 
        </p>

      </div>
    );
  }
}

export default App;
