import React, { Component } from 'react';
import './FilterSubmenu.css';
import FilterSubmenuTile from '../FilterSubmenuTile/FilterSubmenuTile';

class FilterSubmenu extends Component {
constructor(props){
  super(props);

  this.setSubmenuTileWithPropNames = this.setSubmenuTileWithPropNames.bind(this);
}
 setSubmenuTileWithPropNames() {
   let filterTiles = this.props.urgencies.map((urgency, key) => <FilterSubmenuTile key={key} name={urgency}/>);
   return filterTiles;
 }

  render() {
    return (
      <div className="FilterSubmenu">
        {this.setSubmenuTileWithPropNames}
      </div>
    );
  }
}

export default FilterSubmenu;
