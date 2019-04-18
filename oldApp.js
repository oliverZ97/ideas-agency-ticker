import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="login">
          <label for="uName">Benutzer:</label>
          <input type="text" placeholder="Benutzer" minLength="4" name="uName"></input>
          <label for="psw">Passwort:</label>
          <input type="text" placeholder="Password" minLength="6" name="psw"></input>
          <button className="b-login" type="submit">Login</button>
        </div>
      </div>
    );
  }
}

export default App;