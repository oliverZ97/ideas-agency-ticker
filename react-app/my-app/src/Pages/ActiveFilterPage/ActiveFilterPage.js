import React, { Component } from 'react';
import { Link } from 'react-router';
import './ActiveFilterPage.css';
import SlideInView from '../../Components/SlideInView/SlideInView';
import FilterActive from '../../Components/FilterActive/FilterActive';

class ActiveFilterPage extends Component {
  render() {
    return (
      <div className="ActiveFilterPage">
        <Link to="/list"><button className="filter_back"></button></Link>
        <FilterActive />
      </div>
    );
  }
}

export default ActiveFilterPage;