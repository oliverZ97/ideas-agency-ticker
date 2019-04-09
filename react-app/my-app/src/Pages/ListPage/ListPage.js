import React, { Component } from 'react';
import TileSlider from '../../TileSlider/TileSlider';

class ListPage extends Component {
  render() {
    return (
      <div className="ListPage">
        <h5>Priorität 1</h5>
        <TileSlider />
        <h5>Politik</h5>
        <TileSlider />
        <h5>Wirtschaft</h5>
        <TileSlider />
        <h5>Kultur</h5>
        <TileSlider />
      </div>
    );
  }
}

export default ListPage;
