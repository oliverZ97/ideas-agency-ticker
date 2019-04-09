import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <button id="navigation_button_filter" type="submit">Filter</button>
        <button id="navigation_button_searches" type="submit">Saved Searches</button>
        <button id="navigation_button_favs" type="submit">Favs</button>
        <input id="navigation_searchbar" type="text" placeholder="Search"></input>
        <button id="navigation_button_logout" type="submit">Logout</button>
      </div>
    );
  }
}

export default Navigation;
