import React, { Component } from 'react';
import './SavedSearchTile.css';
import '../../../css/elements/pill.css';

class SavedSearchTile extends Component {
  render() {
    return (
      <div className="savedSearchTile">
        <div className="savedSearchTile__content">
            <h5 className="savedSearchTile__headline">Name</h5>
            <p className="savedSearchTile__text">Filter:</p>
            <p className="savedSearchTile__text">Prio 1, Prio 2, Prio 3, Wirtschaft, dpa</p>
        </div>
        <div> 
            <button className="savedSearchTile__pill pill--delete" type="submit"></button>
        </div>
      </div>
    );
  }
}

export default SavedSearchTile;