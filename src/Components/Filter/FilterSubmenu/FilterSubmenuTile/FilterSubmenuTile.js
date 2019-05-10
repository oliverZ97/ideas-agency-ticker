import React from 'react';
import './FilterSubmenuTile.css';
import '../../../../css/base/text.css';

const FilterSubmenuTile = (props) => {

  let handleClick = (category, checked) => {
    props.handleToggle(category, checked);
  }

  return (
    <div className="FilterSubmenuTile">
      <div className="FilterSubmenuTile__container">
        <label className="FilterSubmenuTile__label">
          <input id="checkbox" className="FilterSubmenuTile__input" checked={props.isChecked} type="checkbox" onChange={() => handleClick(props.value, !props.isChecked)}></input>
          <span className="FilterSubmenuTile__checkmark"></span>
        </label>
        <div className="FilterSubmenuTile__content">
          <p className="FilterSubmenuTile__text">{props.content}</p>
        </div>
      </div >
    </div >
  );
}

export default FilterSubmenuTile;