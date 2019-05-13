import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import authentificationService from '../../services/authentificationService';
import '../../css/layout/container.css';
import '../../css/components/nav.css';
import '../../css/elements/pill.css';
import './Navigation.css';

class Navigation extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleFavClick= this.handleFavClick.bind(this);
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
      <div className="navigation">
        <div className="navigation__content"> 
          <div>
            <button className="navigation__pill pill--searches" onClick={this.handleSearchClick}></button>
            <button className="navigation__pill pill--favorite" onClick={this.handleFavClicks}></button>
          </div>
          <div>
            <button className="navigation__pill pill--logout" onClick={this.handleLogout}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
