import React, { Component } from 'react';
import './TileGroup.css';
import TileSlider from '../../Components/TileSlider/TileSlider';

function TileGroup(props) {

    const docPolitics = [];
    const docUrgency1 = [];
    const docEconomy = [];

    function setDocument(document) {
        return props.setDoc(document);
    }

    function handleDocumentSplitForTileView(props) {
        props.documents.map((document) => {
            if (document.urgency < 3) {
                docUrgency1.push(document);
            }
            if (document.category === 'Politik') {
                docPolitics.push(document);
            }
            if (document.category === 'Wirtschaft') {
                docEconomy.push(document);
            }
        })
    }

    handleDocumentSplitForTileView(props);
    return (
        <div className="Container-column TileGroup__container">
            <h2>Priorität 1/2</h2>
            <TileSlider documents={docUrgency1 || []} setDoc={setDocument} />
            <h2>Politik</h2>
            <TileSlider documents={docPolitics || []} setDoc={setDocument} />
            <h2>Wirtschaft</h2>
            <TileSlider documents={docEconomy || []} setDoc={setDocument} />
        </div>
    );
}

export default TileGroup;