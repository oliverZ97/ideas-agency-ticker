import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation/Navigation';
import LoginForm from './LoginForm/LoginForm';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default App;
