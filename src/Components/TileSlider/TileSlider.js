import React, { Component } from 'react';
import './TileSlider.css';
import Tile from '../Tile/Tile';

function TileSlider(props) {

    function setDocument(document) {
        return props.setDoc(document);
    }

    let tiles = props.documents.map((document) => <Tile key={document.id} document={document} setDoc={setDocument} />);
    return (
        <div className="TileSlider">
            <div>
                <button className="TileSlider-button--prev" type="submit"></button>
            </div>
            <div className="TileSlider__content">
                {tiles}
            </div>
            <div>
                <button className="TileSlider-button--next" type="submit"></button>
            </div>
        </div>
    );
}

export default TileSlider;