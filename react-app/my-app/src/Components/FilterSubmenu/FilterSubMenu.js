import React, { Component } from 'react';
import './FilterSubmenu.css';
import FilterSubmenuTile from '../FilterSubmenuTile/FilterSubmenuTile';

function FilterSubmenu(props) {

  console.log(props.names);

  let filtertiles = props.names.map((name) => <FilterSubmenuTile key={name} name={name} />);
  return (
    <div className="FilterSubmenu">
      {filtertiles}
    </div>
  );
}

export default FilterSubmenu;
