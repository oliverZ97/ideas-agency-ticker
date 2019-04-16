import React, { Component } from 'react';
import './ListPageFilterActive.css'
import TileSlider from '../../Components/TileSlider/TileSlider';

class ListPageFilterActive extends Component {
  render() {
    return (
      <div className="ListPageFilterActive">
        <p className="active-filter-settings">Filter aktiv: Priorität 1, Priorität 2, Wirtschaft</p>
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

export default ListPageFilterActive;
