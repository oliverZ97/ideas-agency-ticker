import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import authentificationService from '../../services/authentificationService';

class Navigation extends Component {
  constructor(props) {
    super();
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleFavClick = this.handleFavClick.bind(this);
    this.authentificationService = authentificationService;

  }

  handleLogout() {
    this.authentificationService.removeToken();
    browserHistory.push('/login');
  }

  handleSearchClick() {
    browserHistory.push('/ssearches');
  }

  handleFavClick() {
    browserHistory.push('/favorites');
  }

  render() {

      return (
        <div className="header">
          <div className="nav__content container-row--space-between">
            <div>
              <button className="pill__secondary pill--searches" onClick={this.handleSearchClick}></button>
              <button className="pill__secondary pill--favorite" onClick={this.handleFavClick}></button>
            </div>
            <div>
              <button className="pill__secondary pill:active pill--logout" onClick={this.handleLogout}></button>
            </div>
          </div>
        </div>
      );
  }
}

export default Navigation;
