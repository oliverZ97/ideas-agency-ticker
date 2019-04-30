import React, { Component } from 'react';
import { Link } from 'react-router';
import './FilterActive.css';
import FilterSubmenuActive from '../FilterSubmenuActive/FilterSubmenuActive';

class FilterActive extends Component {
  render() {
    return (
      <div className="FilterActive">
        <div className="FilterActive_Buttons_Menu">
        <Link to="/list-active"><button className="FilterActive_button_update" type="submit"></button></Link>
          <button className="FilterActive_button_save" type="submit"></button>
        </div>
        <h4>Prioritäten</h4>
        <FilterSubmenuActive />
        <h4>Kategorien</h4>
        <FilterSubmenuActive />
        <h4>Agenturen</h4>
        <FilterSubmenuActive />
      </div>
    );
  }
}

export default FilterActive;