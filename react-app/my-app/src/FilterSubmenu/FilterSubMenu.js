import React, { Component } from 'react';
import './FilterSubmenu.css';
import FilterSubmenuTile from '../FilterSubmenuTile/FilterSubmenuTile';

class FilterSubmenu extends Component {
  render() {
    return (
      <div className="FilterSubmenu">
        <FilterSubmenuTile />
        <FilterSubmenuTile />
        <FilterSubmenuTile />
        <FilterSubmenuTile />
        <FilterSubmenuTile />
        <FilterSubmenuTile />
        <FilterSubmenuTile />
        <FilterSubmenuTile />

      </div>
    );
  }
}

export default FilterSubmenu;
