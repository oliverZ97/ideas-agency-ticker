import React from 'react';
import './FilterSubmenu.scss';
import FilterSubmenuTile from './FilterSubmenuTile/FilterSubmenuTile';

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
    <div className="container-row--center filterSubmenu">
      {tiles}
    </div>
  );
}

export default FilterSubmenu;
