import React, { Component } from 'react';
import './ListPage.css'
import TileSlider from '../../TileSlider/TileSlider';

class ListPage extends Component {
  render() {
    return (
      <div className="ListPage">
        <h3>Priorität 1</h3>
        <TileSlider />
        <h3>Politik</h3>
        <TileSlider />
        <h3>Wirtschaft</h3>
        <TileSlider />
        <h3>Kultur</h3>
        <TileSlider />
      </div>
    );
  }
}

export default ListPage;
