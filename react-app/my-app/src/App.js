import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import './App.css';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import LoginPage from './Pages/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
        <Router history={browserHistory}>
                  <Route path={"login"} component={LoginPage}/>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
