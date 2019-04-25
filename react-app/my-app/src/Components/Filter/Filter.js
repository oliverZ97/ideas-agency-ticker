import React, { Component } from 'react';
import { Link } from 'react-router';
import './Filter.css';
import FilterSubmenu from '../FilterSubmenu/FilterSubMenu';

class Filter extends Component {
  constructor(){
    super();
    this.state = {
      urgencies: ['Priorität 1', 'Priorität 2', 'Priorität 3', 'Priorität 4', 'Priorität 5', 'Priorität 6', 'Priorität 7', 'Priorität 8']
    };
  }
  render() {
    return (
      <div className="Filter">
        <div className="Filter_Buttons_Menu">
          <button className="Filter_button_update" type="submit"><Link to="/list"></Link></button>
          <button className="Filter_button_save" type="submit"></button>
        </div>
        <h4>Prioritäten</h4>
        <FilterSubmenu urgencies={this.state.urgencies}/>
        <h4>Kategorien</h4>
        <FilterSubmenu />
        <h4>Agenturen</h4>
        <FilterSubmenu />
      </div>
    );
  }
}

export default Filter;