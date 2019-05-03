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
    this.handleToggleUrgencies = this.handleToggleUrgencies.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
  }

  handleToggleCategories(name, selected) {
    let newCategories = [];

    if (selected) {
      newCategories = [...this.state.categories]; //creates a copy of the array not a reference
      newCategories.push(name);   //name-element is pushed into array
    } else {
      newCategories = [...this.state.categories];
      let idx = newCategories.indexOf(name);  //return index of an object in the array which equals name, returns -1 if object not exist in array
      newCategories.splice(idx, 1); //returns one element at Index idx
    }

    this.setState({
      categories: newCategories
    })
    console.log(this.state.categories);
    this.handleCategories();
  }

  handleToggleUrgencies(name, selected) {
    let newUrgencies = [];

    if(selected) {
      newUrgencies = [...this.state.urgencies]; 
      newUrgencies.push(name);
    } else {
      newUrgencies = [...this.state.urgencies];
      let idx = newUrgencies.indexOf(name);
      newUrgencies.splice(idx, 1);
    }

    this.setState({
      urgencies: newUrgencies
    })
    console.log(this.state.urgencies);
  }

  handleCategories() {
    return this.props.categoryHandler(this.state.categories);
  }

  render() {
    let categoryEntries =
      [
        { text: 'Internationales', value: 'Internationales' },
        { text: 'Kategorie unbekannt', value: 'Kategorie unbekannt' },
        { text: 'Kultur', value: 'Kultur' },
        { text: 'Politik', value: 'Politik' },
        { text: 'Redaktioneller Service', value: 'Redaktioneller Service' },
        { text: 'Sport', value: 'Sport' },
        { text: 'Vermischtes', value: 'Vermischtes' },
        { text: 'Wirtschaft', value: 'Wirtschaft' }
      ];

    categoryEntries.forEach(category => {
      if (this.state.categories.indexOf(category.value) !== -1) {
        category.selected = true;
      } else {
        category.selected = false;
      }
    })

    let urgencyEntries =
    [
      {text: 'Priorität 1', value: 'Priorität 1'},
      {text: 'Priorität 2', value: 'Priorität 2'},
      {text: 'Priorität 3', value: 'Priorität 3'},
      {text: 'Priorität 4', value: 'Priorität 4'},
      {text: 'Priorität 5', value: 'Priorität 5'},
      {text: 'Priorität 6', value: 'Priorität 6'},
      {text: 'Priorität 7', value: 'Priorität 7'},
      {text: 'Priorität 8', value: 'Priorität 8'}
    ]

    urgencyEntries.forEach(urgency => {
      if (this.state.urgencies.indexOf(urgency.value) !== -1){ //true when urgency.value is element in array
        urgency.selected = true;
      } else {
        urgency.selected = false;
      }
    })

    return (
      <div className="Filter">

        <FilterMenu searchHandler={this.props.searchHandler} />
        <h4>Prioritäten</h4>
        <FilterSubmenu className="FilterSubmenu" 
          entries={urgencyEntries}
          onFilterChange={this.handleToggleUrgencies}
        />
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