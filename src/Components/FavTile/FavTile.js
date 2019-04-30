import React, { Component } from 'react';
import './FavTile.css';

class FavTile extends Component {
  render() {
    return (
      <div className="FavTile">
        <div className="FavContent">
            <h5>Title</h5>
            <p>10. April 2019</p>
            <p className="Fav_preview">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="DeleteFav"> 
            <button type="submit"></button>
        </div>
      </div>
    );
  }
}

export default FavTile;