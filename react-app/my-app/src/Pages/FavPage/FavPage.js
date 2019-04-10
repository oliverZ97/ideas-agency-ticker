import React, { Component } from 'react';
import './FavPage.css';
import SlideInView from '../../SlideInView/SlideInView';
import Favorites from '../../Favorites/Favorites';

class FavPage extends Component {
  render() {
    return (
      <div className="FavPage">
        <Favorites />
      </div>
    );
  }
}

export default FavPage;