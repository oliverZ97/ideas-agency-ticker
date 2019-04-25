import React, { Component } from 'react';
import './FilterSubmenuTile.css';

class FilterSubmenuTile extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="FilterSubmenuTile">
        <p>{this.props.name}</p>
        <div className="checkbox">
          <label className="container">
            <input className="tile-unchecked" type="checkbox"></input>
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    );
  }
}

export default FilterSubmenuTile;