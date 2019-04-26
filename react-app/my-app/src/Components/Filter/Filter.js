import React, { Component } from 'react';
import { Link } from 'react-router';
import './Filter.css';
import FilterSubmenu from '../FilterSubmenu/FilterSubMenu';
import FilterMenu from '../FilterMenu/FilterMenu';

class Filter extends Component {
  constructor(){
    super();
    this.state = {
      urgencies: [
        'Priorität 1', 'Priorität 2', 'Priorität 3', 'Priorität 4',
        'Priorität 5', 'Priorität 6', 'Priorität 7', 'Priorität 8'
      ],
      categories: [
        'Vermischtes', 'Sport', 'Kategorie unbekannt', 'Wirtschaft',
        'Politik'
      ]
    };
  }
  render() {
    return (
      <div className="Filter">
        <FilterMenu />
        <h4>Prioritäten</h4>
        <FilterSubmenu names={this.state.urgencies}/>
        <h4>Kategorien</h4>
        <FilterSubmenu names={this.state.categories}/>
      </div>
    );
  }
}

export default Filter;