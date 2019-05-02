import React, { Component } from 'react';
import './FilterSubmenu.css';
import FilterSubmenuTile from '../FilterSubmenuTile/FilterSubmenuTile';

const FilterSubmenu = (props) =>  {
  let entries = props.entries || [];
  let tiles = entries.map((entry) => {
  return <FilterSubmenuTile
    content={entry.text}
    isChecked={entry.selected}
    value={entry.value}
    handleToggle={props.onFilterChange} />;
  })
  
    return (
    <div className="FilterSubmenu">
      {tiles}
    </div>
  );
}

export default FilterSubmenu;
