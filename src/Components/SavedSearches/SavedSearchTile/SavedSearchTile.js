import React, { Component } from 'react';
import './SavedSearchTile.css';
import '../../../css/elements/pill.css';

class SavedSearchTile extends Component {
  render() {
    return (
      <div className="SavedSearchTile">
        <div className="SavedSearchTile__content">
            <h5 className="SavedSearchTile__headline">Name</h5>
            <p className="SavedSearchTile__text">Filter:</p>
            <p className="SavedSearchTile__text">Prio 1, Prio 2, Prio 3, Wirtschaft, dpa</p>
        </div>
        <div> 
            <button className="SavedSearchTile__pill pill--delete" type="submit"></button>
        </div>
      </div>
    );
  }
}

export default SavedSearchTile;