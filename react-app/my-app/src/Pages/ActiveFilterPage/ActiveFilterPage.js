import React, { Component } from 'react';
import { Link } from 'react-router';
import './ActiveFilterPage.css';
import SlideInView from '../../SlideInView/SlideInView';
import FilterActive from '../../FilterActive/FilterActive';

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