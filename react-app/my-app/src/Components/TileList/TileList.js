import React, { Component } from 'react';
import './TileList.css'
import Tile from '../Tile/Tile';


 //TileList ist zuständig für das rendern der tiles und bekommt über die props das suchergebnis

function TileList(props) {
    console.log('TileList', props.documents);
    let tiles = props.documents.map((document) => <Tile key={document.id} title={document.title}/>);
    return (
        <div className="TileList">
                {tiles}
        </div>
    );
}

export default TileList;
