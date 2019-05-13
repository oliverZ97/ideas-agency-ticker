import React from 'react';
import './FilterSubmenuTile.css';
import '../../../../css/base/text.css';

const FilterSubmenuTile = (props) => {

  let handleClick = (category, checked) => {
    props.handleToggle(category, checked);
  }

  return (
    <div className="filterSubmenuTile">
      <div className="filterSubmenuTile__container">
        <label className="filterSubmenuTile__label">
          <input id="checkbox" className="filterSubmenuTile__input" checked={props.isChecked} type="checkbox" onChange={() => handleClick(props.value, !props.isChecked)}></input>
          <span className="filterSubmenuTile__checkmark"></span>
        </label>
        <div className="filterSubmenuTile__content">
          <p className="filterSubmenuTile__text">{props.content}</p>
        </div>
      </div >
    </div >
  );
}

export default FilterSubmenuTile;