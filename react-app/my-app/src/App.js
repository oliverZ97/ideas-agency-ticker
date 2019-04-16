import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import 'normalize.css';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import LoginPage from './Pages/LoginPage/LoginPage';
import ListPage from './Pages/ListPage/ListPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import FavPage from './Pages/FavPage/FavPage';
import SaveSearchPage from './Pages/SaveSearchPage/SaveSearchPage';
import FilterPage from './Pages/FilterPage/FilterPage';
import ActiveFilterPage from './Pages/ActiveFilterPage/ActiveFilterPage';
import ListPageFilterActive from './Pages/ListPageFilterActive/ListPageFilterActive';
import ListDetailPage from './Pages/ListDetailPage/ListDetailPage';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
        <Router history={browserHistory}>
                  <Route path={"login"} component={LoginPage}/>
                  <Route path={"list"} component={ListPage}/>
                  <Route path={"detail"} component={DetailPage}/>
                  {/*<Route path={"error"} component={ErrorPage}/>*/}
                  <Route path={"favorites"} component={FavPage}/>
                  <Route path={"ssearches"} component={SaveSearchPage}/>
                  <Route path={"filter"} component={FilterPage}/>
                  <Route path={"active-filter"} component={ActiveFilterPage}/>
                  <Route path={"list-active"} component={ListPageFilterActive}/>
                  <Route path={"list-detail"} component={ListDetailPage}/>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
