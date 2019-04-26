import React, { Component } from 'react';
import './FilterSubmenuTile.css';

class FilterSubmenuTile extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    let random = Math.random()*100000000000;

    return (
      <div className="FilterSubmenuTile">
        <div className="checkbox">
          <label className="container">
            <input className="tile-unchecked" type="checkbox"></input>
            <span className="checkmark"></span>
          </label>
          <div className="tilename">
            <p>{this.props.name}</p>
          </div>
        </div >
        <div className="tileImg">
          <img src={"https://picsum.photos/300/100?rand=" + random}></img>
        </div>
      </div >
    );
  }
}

export default FilterSubmenuTile;