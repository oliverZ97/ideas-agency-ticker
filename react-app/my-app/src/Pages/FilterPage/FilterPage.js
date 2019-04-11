import React, { Component } from 'react';
import { Link } from 'react-router';
import './FilterPage.css';
import SlideInView from '../../SlideInView/SlideInView';
import Filter from '../../Filter/Filter';

class FilterPage extends Component {
  render() {
    return (
      <div className="FilterPage">
        <Link to="/list"><button className="filter_back"></button></Link>
        <Filter />
      </div>
    );
  }
}

export default FilterPage;