import React, { Component } from 'react';
import './SavedSearchTile.scss';

class SavedSearchTile extends Component {
  render() {
    return (
      <div className="savedSearchTile container-row--space-between border--light">
        <div className="savedSearchTile__content">
            <h5 className="headline__secondary headline--light">Name</h5>
            <p className="text__primary text--light">Filter:</p>
            <p className="text__primary text--light">Prio 1, Prio 2, Prio 3, Wirtschaft, dpa</p>
        </div>
        <div> 
            <button className="pill__primary pill--delete" type="submit"></button>
        </div>
      </div>
    );
  }
}

export default SavedSearchTile;