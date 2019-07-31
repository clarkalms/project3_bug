import React, { Component } from 'react';
import Logo from './components/Logo/bug_icon.png';
import './App.css';
import Jumbotron from './components/Jumbotron/jumbotron';
import Nav from './components/Nav/nav';
class App extends Component {
  state = {
    something: null
  };
  render() {
    return (

      <div className="App">
      <Nav />
      <Jumbotron />
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <p>
            Hello World! Let's get to coding...
          </p>
        </header>
      </div>
  
    );
  }
}

export default App;
