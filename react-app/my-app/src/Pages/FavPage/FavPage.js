import React, { Component } from 'react';
import { Link } from 'react-router';
import './FavPage.css';
import SlideInView from '../../SlideInView/SlideInView';
import Favorites from '../../Favorites/Favorites';

class FavPage extends Component {
  render() {
    return (
      <div className="FavPage">
        <Link to="/list"><button className="fav_back" ></button></Link>
        <Favorites />
      </div>
    );
  }
}

export default FavPage;