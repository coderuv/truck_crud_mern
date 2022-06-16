import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Truck from './Components/Truck';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Truck/>
      </div>
    );
  }
}

export default App;
