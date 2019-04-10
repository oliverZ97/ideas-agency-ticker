import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import 'normalize.css';
import './App.css';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import LoginPage from './Pages/LoginPage/LoginPage';
import ListPage from './Pages/ListPage/ListPage';
import DetailPage from './Pages/DetailPage/DetailPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
        <Router history={browserHistory}>
                  <Route path={"login"} component={LoginPage}/>
                  <Route path={"list"} component={ListPage}/>
                  <Route path={"detail"} component={DetailPage}/>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
