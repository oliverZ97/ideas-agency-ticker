import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import authentificationService from '../../services/authentificationService';
import './Navigation.css';

class Navigation extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
    this.authentificationService = authentificationService
  }

  handleLogout() {
    this.authentificationService.removeToken();
    browserHistory.push('/login');
  }

  render() {
    return (
      <div className="Navigation">
        <div className="nav_content">
          <div className="nav_buttons">
            <a href="filter"><button id="navigation_button_filter" type="submit"></button></a>
            <a href="ssearches"><button id="navigation_button_searches" type="submit"></button></a>
            <a href="favorites"><button id="navigation_button_favs" type="submit"></button></a>
          </div>
          <div className="nav_logout">
            <button id="navigation_button_logout" onClick={this.handleLogout}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
