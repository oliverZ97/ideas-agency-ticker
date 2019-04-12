import React, { Component } from 'react';
import './FilterSubmenuActive.css';
import FilterSubmenuTile from '../FilterSubmenuTile/FilterSubmenuTile';
import FilterSubmenuTileActive from '../FilterSubmenuTileActive/FilterSubmenuTileActive';

class FilterSubmenuActive extends Component {
  render() {
    return (
      <div className="FilterSubmenuActive">
        <FilterSubmenuTile />
        <FilterSubmenuTileActive />
        <FilterSubmenuTileActive />
        <FilterSubmenuTile />
        <FilterSubmenuTile />
        <FilterSubmenuTileActive />
        <FilterSubmenuTile />
        <FilterSubmenuTileActive />

      </div>
    );
  }
}

export default FilterSubmenuActive;
