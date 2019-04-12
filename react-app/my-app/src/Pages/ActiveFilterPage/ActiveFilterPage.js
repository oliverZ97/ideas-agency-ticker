import React, { Component } from 'react';
import { Link } from 'react-router';
import './ActiveFilterPage.css';
import SlideInView from '../../SlideInView/SlideInView';
import Filter from '../../Filter/Filter';

class ActiveFilterPage extends Component {
  render() {
    return (
      <div className="ActiveFilterPage">
        <Link to="/list"><button className="filter_back"></button></Link>
        <Filter />
      </div>
    );
  }
}

export default FilterPage;