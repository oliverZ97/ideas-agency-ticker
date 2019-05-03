import React, { Component } from 'react';
import apiClient from '../../services/apiClient';
import './FilterPage.css';
import Filter from '../../Components/Filter/Filter';
import _ from 'lodash';

class FilterPage extends Component {
  constructor() {
    super();
    this.state = {
      documents: [],
      query: '',
      urgencyLimit: '',
      categories: null
    }
    this.handleSearch = _.debounce(this.handleSearch.bind(this), 500);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleUrgencyLimit = this.handleUrgencyLimit.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
  }

  handleSearch() {
    apiClient.search(this.state.query, this.state.urgencyLimit, this.state.categories)
      .then((result) => {
        this.setState({
          documents: result.documents
        })
        console.log('Suche in FilterPage');
      })
      .catch(() => {
        this.setState({
          documents: []
        })
      })
  }

  handleQuery(q) {
    this.setState({
      query: q
    })
  }

  handleUrgencyLimit(limit) {
    this.setState({
      urgencyLimit: limit
    })
  }

  handleCategories(catArray) {
    this.setState({
      categories: catArray
    })
  }

  render() {
    return (
      <div className="FilterPage">
        <Filter searchHandler={this.handleSearch} categoryHandler={this.handleCategories} urgencyHandler={this.handleUrgencyLimit}/>
      </div>
    );
  }
}

export default FilterPage;