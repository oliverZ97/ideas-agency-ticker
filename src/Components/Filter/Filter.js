import React, { Component } from 'react';
import './Filter.css';
import FilterSubmenu from '../FilterSubmenu/FilterSubMenu';
import FilterMenu from '../FilterMenu/FilterMenu';

class Filter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    this.handleToggleCategories = this.handleToggleCategories.bind(this);
    this.handleToggleUrgencies = this.handleToggleUrgencies.bind(this);
  }

  handleToggleCategories(name, selected) {
    let newCategories = [];

    if (selected) {
      newCategories = [...this.props.categories]; //creates a copy of the array not a reference
      newCategories.push(name);   //name-element is pushed into array
    } else {
      newCategories = [...this.props.categories];
      let idx = newCategories.indexOf(name);  //return index of an object in the array which equals name, returns -1 if object not exist in array
      newCategories.splice(idx, 1); //returns one element at Index idx
    }

    return this.props.categoryHandler(newCategories);
  }

  //gibt Limit an SearchPage zurück
  handleToggleUrgencies(urgency, selected) {
    let newUrgency = 0;
    if(selected) {
      if(this.props.urgencyLimit < urgency){
        newUrgency = urgency;
      }
    } else {
        newUrgency = 0;
    }

    console.log('limit', newUrgency);
    this.props.urgencyHandler(newUrgency);
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
      if (this.props.categories.indexOf(category.value) !== -1) {
        category.selected = true;
      } else {
        category.selected = false;
      }
    })

    let urgencyEntries =
    [
      {text: 'Priorität 1', value: 1},
      {text: 'Priorität 2', value: 2},
      {text: 'Priorität 3', value: 3},
      {text: 'Priorität 4', value: 4},
      {text: 'Priorität 5', value: 5},
      {text: 'Priorität 6', value: 6},
      {text: 'Priorität 7', value: 7},
      {text: 'Priorität 8', value: 8}
    ]
    //rendert checkbox in tile
    urgencyEntries.forEach(urgency => {
      if(this.props.urgencyLimit >= urgency.value) {
      //if (this.state.urgencies.indexOf(urgency.value) !== -1){ //true when urgency.value is element in array
        urgency.selected = true;
      } else {
        urgency.selected = false;
      }
    })

    return (
      <div className="Filter">

        <FilterMenu displayFilter={this.props.displayFilter}/>
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