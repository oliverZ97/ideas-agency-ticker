import React, { Component } from 'react';
import './FilterSubmenuTile.css';

const FilterSubmenuTile = (props) => {

  let handleClick = (category, checked) => {
    props.handleToggle(category, checked);
  }

  return (
    <div className="FilterSubmenuTile">
      <div className="checkbox">
        <label className="container">
          <input id="checkbox" className="tile-unchecked" checked={props.isChecked} type="checkbox"  onChange={() => handleClick(props.value, !props.isChecked)}></input>
          <span className="checkmark"></span>
        </label>
        <div className="tilename">
          <p>{props.content}</p>
        </div>
      </div >
      <div className="tileImg">

      </div>
    </div >
  );
}

export default FilterSubmenuTile;