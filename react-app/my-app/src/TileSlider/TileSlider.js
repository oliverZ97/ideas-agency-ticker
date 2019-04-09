import React, { Component } from 'react';
import './TileSlider.css';
import Tile from '../Tile/Tile';

class TileSlider extends Component {
  render() {
    return (
        <div className="slider">
            <div className="prev">
                <p>Prev</p>
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
            <div className="next">
                <p>Next</p>
            </div>
        </div>
    );
  }
}

export default TileSlider;