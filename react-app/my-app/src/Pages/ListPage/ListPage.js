import React, { Component } from 'react';
import './ListPage.css'
import TileSlider from '../../Components/TileSlider/TileSlider';

class ListPage extends Component {
  render() {
    return (
      <div className="ListPage">
        <label className="auto-reload-toggle">
            <input type="checkbox" name="toggle"></input>
            <span className="toggle-slider"></span>
        </label>
        <label className="toggle-label"of="toggle">Auto-Aktualisieren</label>
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
