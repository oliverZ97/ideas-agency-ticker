import React, { Component } from 'react';
import './FilterPage.css';
import SlideInView from '../../SlideInView/SlideInView';
import Filter from '../../Filter/Filter';

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