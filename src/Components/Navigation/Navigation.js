import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import authentificationService from '../../services/authentificationService';
import '../../css/elements/button.css';
import '../../css/layout/container.css';
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
      <div className="Navigation">
        <div className="Navigation__content Container-row Container-row--space-between"> 
          <div>
            <button className="button--small Navigation-button--searches" onClick={this.handleSearchClick}></button>
            <button className="button--small button--favorite" onClick={this.handleFavClicks}></button>
          </div>
          <div>
            <button className="button--small Navigation-button--logout" onClick={this.handleLogout}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
