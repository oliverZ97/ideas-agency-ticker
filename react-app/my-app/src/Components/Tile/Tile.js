import React, { Component } from 'react';
import { Link } from 'react-router';
import './Tile.css';

class Tile extends Component {
  render() {
    return (
      <div className="Tile">
      <Link to="/detail">
        <div className="row">
            <h4>Titel</h4>
            <button type="button">
                
            </button>
        </div>
        <div className="row">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        </Link>
      </div>
    );
  }
}

export default Tile;