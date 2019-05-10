import React, { Component } from 'react';
import './FavTile.css';
import '../../../css/elements/pill.css';

class FavTile extends Component {
  render() {
    return (
      <div className="FavTile">
        <div className="FavTile__content">
            <h5 className="FavTile__headline">Title</h5>
            <p className="FavTile__text">10. April 2019</p>
            <p className="FavTile__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="FavTile__container"> 
            <button className="FavTile__pill pill--delete"></button>
        </div>
      </div>
    );
  }
}

export default FavTile;