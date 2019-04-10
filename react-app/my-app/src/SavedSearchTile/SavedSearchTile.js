import React, { Component } from 'react';
import './SavedSearchTile.css';

class SavedSearchTile extends Component {
  render() {
    return (
      <div className="SavedSearchTile">
        <div>
            <button className="UpdateFilter" type="submit"></button>
        </div>
        <div className="SearchContent">
            <h5>Name</h5>
            <p>Filter:</p>
            <p>Prio 1, Prio 2, Prio 3, Wirtschaft, dpa</p>
        </div>
        <div> 
            <button className="DeleteFilter" type="submit"></button>
        </div>
      </div>
    );
  }
}

export default SavedSearchTile;