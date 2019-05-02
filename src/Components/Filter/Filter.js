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
        {'name': 'Priorität 1', 'active': false}, 
        {'name': 'Priorität 2', 'active': false},
        {'name': 'Priorität 3', 'active': false},
        {'name': 'Priorität 4', 'active': false},
        {'name': 'Priorität 5', 'active': false},
        {'name': 'Priorität 6', 'active': false},
        {'name': 'Priorität 7', 'active': false},
        {'name': 'Priorität 8', 'active': false}
      ],
      categories: [
        {'name': 'Internationales', 'active': false},
        {'name': 'Kultur', 'active': false},
        {'name': 'Kategorie unbekannt', 'active': false},
        {'name': 'Politik', 'active': false},
        {'name': 'Redaktioneller Service', 'active': false},
        {'name': 'Sport', 'active': false},
        {'name': 'Vermischtes', 'active': false},
        {'name': 'Wirtschaft', 'active': false},
      ],
      filterContent: []
    };

    this.handleFilterContent = this.handleFilterContent.bind(this);
    this.handleActiveStatus = this.handleActiveStatus.bind(this);
  }
  handleFilterContent(content) {
    let newContent = this.state.filterContent;
    newContent.push(content);
    this.setState({
      filterContent: newContent
    });
    console.log(this.state.filterContent)
  }

  handleActiveStatus(name, status) {
    let newUrgencies = this.state.urgencies;

    for (let i in this.state.urgencies) {
      if(this.state.urgencies[i].name == name){
        newUrgencies[i].active = status;
      }
      this.setState({
        urgencies: newUrgencies
      })
    }
  }

  render() {
    return (
      <div className="Filter">
        <FilterMenu />
        <h4>Prioritäten</h4>
        <FilterSubmenu className="FilterSubmenu" content={this.state.urgencies} filterContent={this.handleFilterContent} activeStatus={this.handleActiveStatus}/>
        <h4>Kategorien</h4>
        <FilterSubmenu className="FilterSubmenu" content={this.state.categories} filterContent={this.handleFilterContent} activeStatus={this.handleActiveStatus}/>
      </div>
    );
  }
}

export default Filter;