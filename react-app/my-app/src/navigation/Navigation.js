import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <a href="filter"><button id="navigation_button_filter" type="submit"></button></a>
        <a href="ssearches"><button id="navigation_button_searches" type="submit"></button></a>
        <a href="favorites"><button id="navigation_button_favs" type="submit"></button></a>
        <input id="navigation_searchbar" type="text" placeholder="Search"></input>
        <a href="login"><button id="navigation_button_logout" type="submit"></button></a>
      </div>
    );
  }
}

export default Navigation;
