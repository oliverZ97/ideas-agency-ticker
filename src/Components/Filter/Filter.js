import React, { Component } from 'react';
import { Link } from 'react-router';
import './Filter.css';
import FilterSubmenu from '../FilterSubmenu/FilterSubMenu';
import FilterMenu from '../FilterMenu/FilterMenu';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urgencies: [],
      categories: [],
      filterContent: []
    };

    this.handleToggleCategories = this.handleToggleCategories.bind(this);
    this.handleToggleUrgency = this.handleToggleUrgency.bind(this);
  }

  handleToggleCategories(name, selected) {
    let newCategories = [];

    if(selected) {
      newCategories = [...this.state.categories];
      newCategories.push(name);
    } else {
      newCategories = [...this.state.categories];
      let idx = newCategories.indexOf(name);
      newCategories.splice(idx, 1);
    }
    
    this.setState ({
      categories: newCategories
    })
  }

  handleToggleUrgency(name, selected) {

    if (selected) {
      console.log('add ', name, ' from urgency in state')
    } else {
      console.log('remove ', name, ' to urgency in state')
    }
  }

  render() {
    let categoryEntries = 
    [
      {text: 'Internationales', value: 'Internationales'},
      {text: 'Kultur', value: 'Kultur'},
      {text: 'Kategorie unbekannt', value:'Kategorie unbekannt'},
      {text: 'Kultur', value: 'Kultur'},
      {text: 'Politik', value: 'Politik'},
      {text: 'Redaktioneller Service', value: 'Redaktioneller Service'},
      {text: 'Sport', value:'Sport'},
      {text: 'Vermischtes', value: 'Vermischtes'},
      {text: 'Wirtschaft', value: 'Wirtschaft'}
    ];

    categoryEntries.forEach(category => {
      if(this.state.categories.indexOf(category.value) !== -1) {
        category.selected = true;
      } else {
        category.selected = false;
      }
    })

  /*// urgencies
  let categoryEntries = {
    'Internationales': "Internationales",
    'Kategorie unbekannt': 'Kategorie unbekannt',
    'Kultur': 'Kultur',
    'Politik': 'Politik',
    'Redaktioneller Service': 'Redaktioneller Service',
    'Sport':'Sport',
    'Vermischtes': 'Vermischtes',
    'Wirtschaft': 'Wirtschaft'
};*/

    /*
            <FilterMenu searchHandler={this.props.searchHandler}/>
        <h4>Prioritäten</h4>
        <FilterSubmenu className="FilterSubmenu"
          content={this.state.urgencies}
          filterContent={this.handleFilterContent}
          handleActiveStatus={this.setUrgencyActive}
          context={'urgencies'}
        /> */
    return (
      <div className="Filter">

        <h4>Kategorien</h4>
        <FilterSubmenu className="FilterSubmenu"
          entries={categoryEntries}
          onFilterChange={this.handleToggleCategories}
        />
      </div>
    );
  }
}

export default Filter;