import React from 'react';
import Tile from '../../Tile/Tile';

function TileSlider(props) {

    function setDocument(document) {
        return props.setDoc(document);
    }

    let tiles = props.documents.map((document) => <Tile key={props.title + "_" + document.id} document={document} setDoc={setDocument} />);
    return (
        <div>
            <h2 className="text--dark headline headline__special">{props.title}</h2>
            <div className="tileSlider container-row--space-between">
                <div className="container-row">
                    {tiles}
                </div>

            </div>
        </div>

    );
}

export default TileSlider;