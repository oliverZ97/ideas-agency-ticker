import React from 'react';
import './FilterSubmenuTile.scss';

const FilterSubmenuTile = (props) => {

  let handleClick = (category, checked) => {
    props.handleToggle(category, checked);
  }

  return (
    <div className="tile container-column--flex-start">
      <div className="container-row--center">
        <label className="filterSubmenuTile__label">
          <input id="checkbox" className="filterSubmenuTile__input" checked={props.isChecked} type="checkbox" onChange={() => handleClick(props.value, !props.isChecked)}></input>
          <span className="filterSubmenuTile__checkmark"></span>
        </label>
        <div className="filterSubmenuTile__content">
          <p className="text__special text--light filterSubmenuTile__text">{props.content}</p>
        </div>
      </div >
    </div >
  );
}

export default FilterSubmenuTile;