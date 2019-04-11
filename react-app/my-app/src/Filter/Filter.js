import React, { Component } from 'react';
import { Link } from 'react-router';
import './Filter.css';
import FilterSubmenu from '../FilterSubmenu/FilterSubMenu';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <div className="Filter_Buttons_Menu">
          <button className="Filter_button_update" type="submit"><Link to="/list"></Link></button>
          <button className="Filter_button_save" type="submit"></button>
        </div>
        <h4>Prioritäten</h4>
        <FilterSubmenu />
        <h4>Kategorien</h4>
        <FilterSubmenu />
        <h4>Agenturen</h4>
        <FilterSubmenu />
      </div>
    );
  }
}

export default Filter;