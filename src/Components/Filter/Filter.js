import React, { Component } from 'react';
import { Link } from 'react-router';
import './Filter.css';
import FilterSubmenu from '../FilterSubmenu/FilterSubMenu';
import FilterMenu from '../FilterMenu/FilterMenu';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urgencies: [
        [ 'Priorität 1', false ],
        [ 'Priorität 2', false ],
        [ 'Priorität 3', false ],
        [ 'Priorität 4', false ],
        [ 'Priorität 5', false ],
        [ 'Priorität 6', false ],
        [ 'Priorität 7', false ],
        [ 'Priorität 8', false ]
      ],
      categories: [
        [ 'Internationales', false ],
        [ 'Kultur', false ],
        [ 'Kategorie unbekannt', false ],
        [ 'Politik', false ],
        [ 'Redaktioneller Service', false ],
        [ 'Sport', false ],
        [ 'Vermischtes', false ],
        [ 'Wirtschaft', false ],
      ],
      filterContent: []
    };

    this.handleFilterContent = this.handleFilterContent.bind(this);
    this.handleActiveStatusUrgency = this.handleActiveStatusUrgency.bind(this);
    this.handleActiveStatusCategory = this.handleActiveStatusCategory.bind(this);
  }
  handleFilterContent(content) {
    let newContent = this.state.filterContent;
    newContent.push(content);
    this.setState({
      filterContent: newContent
    });
    console.log(this.state.filterContent)
  }

  handleActiveStatusUrgency(name, status) {
    let newUrgencies = this.state.urgencies;
    console.log('name: ' + name);
    console.log('status: '+ status)

    for (i in newUrgencies) {
      if(i[0] === name) {
        console.log('Urgency at Index' + i + "was" + newUrgencies[i][1]);
        newUrgencies[i][1] === status;
        console.log('Urgency at Index' + i + "is now" + newUrgencies[i][1]);
      }
    }

    this.setState({
      urgencies: newUrgencies
    })
  }

  handleActiveStatusCategory(name, status) {
    let newCategories = this.state.categories;

    for (i in newCategories) {
      if(i[0] === name) {
        newCategories[i][1] === status;
      }
    }

    this.setState({
      categories: newCategories
    })
  }

  render() {
    return (
      <div className="Filter">
        <FilterMenu searchHandler={this.props.searchHandler}/>
        <h4>Prioritäten</h4>
        <FilterSubmenu className="FilterSubmenu"
          content={this.state.urgencies}
          filterContent={this.handleFilterContent}
          handleActiveStatus={this.handleActiveStatusUrgency}
        />
        <h4>Kategorien</h4>
        <FilterSubmenu className="FilterSubmenu"
          content={this.state.categories}
          filterContent={this.handleFilterContent}
          handleActiveStatus={this.handleActiveStatusCategory}
        />
      </div>
    );
  }
}

export default Filter;