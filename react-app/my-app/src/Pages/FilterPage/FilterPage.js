import React, { Component } from 'react';
import './FilterPage.css';
import Filter from '../../Components/Filter/Filter';

class FilterPage extends Component {
  render() {
    return (
      <div className="FilterPage">
        <Filter />
      </div>
    );
  }
}

export default FilterPage;