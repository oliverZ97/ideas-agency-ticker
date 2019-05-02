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
    }
    this.handleSearch = _.debounce(this.handleSearch.bind(this), 500);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleSearch() {
    apiClient.search(this.state.query)
      .then((result) => {
        this.setState({
          documents: result.documents
        })
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

  render() {
    return (
      <div className="FilterPage">
        <Filter searchHandler={this.handleSearch} queryHandler={this.handleQuery}/>
      </div>
    );
  }
}

export default FilterPage;