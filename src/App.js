import React, { Component } from 'react';
import {Router, Route, browserHistory, Redirect} from 'react-router';
import 'normalize.css';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import LoginPage from './Pages/LoginPage/LoginPage';
import ListPage from './Pages/ListPage/ListPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import FavPage from './Pages/FavPage/FavPage';
import SaveSearchPage from './Pages/SaveSearchPage/SaveSearchPage';
import ListDetailPage from './Pages/ListDetailPage/ListDetailPage';
import ListPageSearches from './Pages/ListPageSearches/ListPageSearches';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Navigation />
        <Router className="content" history={browserHistory}>
                  <Route exact path="/" component={LoginPage}/>
                  <Route path={"login"} component={LoginPage}/>
                  <Route path={"list"} component={ListPage}/>
                  <Route path={"detail"} component={DetailPage}/>
                  {/*<Route path={"error"} component={ErrorPage}/>*/}
                  <Route path={"favorites"} component={FavPage}/>
                  <Route path={"ssearches"} component={SaveSearchPage}/>
                  <Route path={"list-detail"} component={ListDetailPage}/>
                  <Route path={"list-search"} component={ListPageSearches}/>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
