import React, { Component } from 'react';
import './TileSlider.css';
import Tile from '../Tile/Tile';

class TileSlider extends Component {
  render() {
    return (
        <div className="slider">
            <div>
                <button className="prev" type="submit"></button>
            </div>
            <div className="slider-content">
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>
                <div className="tile">
                    <Tile />
                </div>

            </div>
            <div>
                <button className="next" type="submit"></button>
            </div>
        </div>
    );
  }
}

export default TileSlider;