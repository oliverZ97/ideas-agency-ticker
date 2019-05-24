import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import 'normalize.css';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import LoginPage from './Pages/LoginPage/LoginPage';
import FavPage from './Pages/FavPage/FavPage';
import SaveSearchPage from './Pages/SaveSearchPage/SaveSearchPage';
import ListPageSearches from './Pages/ListPageSearches/ListPageSearches';

import '../src/scss/styles.scss';


class App extends Component {

  render() {
    return (
      <div className="app">
        <Navigation />
        <Router className="content" history={browserHistory}>
          <Route exact path="/" component={LoginPage} />
          <Route displayNav={true} path={"login"} component={LoginPage} />
          <Route path={"favorites"} component={FavPage} />
          <Route path={"ssearches"} component={SaveSearchPage} />
          <Route path={"list-search"} component={ListPageSearches} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
