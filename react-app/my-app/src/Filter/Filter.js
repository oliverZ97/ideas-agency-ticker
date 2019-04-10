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
        <h5>Prioritäten</h5>
        <FilterSubmenu />
        <h5>Kategorien</h5>
        <FilterSubmenu />
        <h5>Agenturen</h5>
        <FilterSubmenu />
      </div>
    );
  }
}

export default Filter;