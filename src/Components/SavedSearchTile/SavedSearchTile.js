import React, { Component } from 'react';
import { Link } from 'react-router';
import './SavedSearchTile.css';
import '../../css/elements/pill.css';

class SavedSearchTile extends Component {
  render() {
    return (
      <div className="SavedSearchTile">
        <Link to="active-filter">
        <div className="SearchContent">
            <h5>Name</h5>
            <p>Filter:</p>
            <p>Prio 1, Prio 2, Prio 3, Wirtschaft, dpa</p>
        </div>
        </Link>
        <div> 
            <button className="pill pill__primary pill--delete" type="submit"></button>
        </div>
      </div>
    );
  }
}

export default SavedSearchTile;