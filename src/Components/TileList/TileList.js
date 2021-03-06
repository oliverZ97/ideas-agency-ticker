import React from 'react';
import Tile from '../Tile/Tile';

 //TileList ist zuständig für das rendern der tiles und bekommt über die props das suchergebnis

function TileList(props) {

    function setDocument(document) {
        return props.setDoc(document);
    }
    
    let tiles = props.documents.map((document) => <Tile key={document.id} document={document} setDoc={setDocument}/>);
    return (
        <div className="container-row--center tileList">
                {tiles}
        </div>
    );
}

export default TileList;
