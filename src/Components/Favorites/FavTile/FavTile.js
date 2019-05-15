import React, { Component } from 'react';
import './FavTile.scss';

class FavTile extends Component {
  render() {
    return (
      <div className="favTile border--light container-row--flex-start">
        <div className="favTile__content">
            <h5 className="headline__secondary headline--light">Title</h5>
            <p className="headline__tertiary headline--light">10. April 2019</p>
            <p className="text__primary text--light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="favTile__container"> 
            <button className="pill__primary pill--delete"></button>
        </div>
      </div>
    );
  }
}

export default FavTile;