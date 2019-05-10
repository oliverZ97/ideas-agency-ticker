import React from 'react';
import './TileSlider.css';
import Tile from '../../Tile/Tile';

function TileSlider(props) {

    function setDocument(document) {
        return props.setDoc(document);
    }

    let tiles = props.documents.map((document) => <Tile key={props.title + "_" + document.id} document={document} setDoc={setDocument} />);
    return (
        <div>
            <h2>{props.title}</h2>
            <div className="TileSlider">
                <div className="TileSlider__content">
                    {tiles}
                </div>

            </div>
        </div>

    );
}

export default TileSlider;