import React, { Component } from 'react';
import './FilterSubmenu.css';
import FilterSubmenuTile from '../FilterSubmenuTile/FilterSubmenuTile';

function FilterSubmenu(props) {

  function handleFilterContent(content) {
    return props.filterContent(content);
  }

  function handleActiveStatus(name, status) {
    return props.activeStatus(name, status);
  }

  let filtertiles = props.content.map((content) => <FilterSubmenuTile
    key={content.name}
    content={content}
    filterContent={handleFilterContent}
    activeStatus={handleActiveStatus}
  />);
  return (
    <div className="FilterSubmenu">
      {filtertiles}
    </div>
  );
}

export default FilterSubmenu;