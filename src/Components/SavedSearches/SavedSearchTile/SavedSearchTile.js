import React, { Component } from 'react';
import './SavedSearchTile.scss';

class SavedSearchTile extends Component {
  render() {
    return (
      <div className="tile border--light">
        <div className="tile__meta">
          <h5 className="headline__tertiary headline--light">Name</h5>
        </div>
        <div className="tile__content">
          <div>
            <p className="headline__tertiary text--light">Filter:</p>
            <p className="headline__tertiary text--light">Prio 1, Prio 2, Prio 3, Wirtschaft, dpa</p>
          </div>
          <button className="pill__primary pill--delete" type="submit"></button>
        </div>
      </div>
    );
  }
}

export default SavedSearchTile;
