import React from 'react';
import './TileGroup.css';
import TileSlider from '../../Components/TileSlider/TileSlider';

function TileGroup(props) {

    let docGroups = {};
    let docPolitics = [];
    let docUrgency1 = [];
    let docEconomy = [];

    function setDocument(document) {
        return props.setDoc(document);
    }

    function handleDocumentSplitForTileView(documents) {
        docGroups = {};
        docUrgency1 = documents.filter((document) => {
            return document.urgency < 3;
        })
        documents.forEach(element => {
            let category = element.category;
            if (docGroups[category]) {
                docGroups[category].push(element);
            } else {
                docGroups[category] = [];
                docGroups[category].push(element);
            }
        })
    }

    //iterate over Obj Keys and geenerate TileSliders
    handleDocumentSplitForTileView(props.documents);
    let tileSliders = [];
    const values = Object.values(docGroups)
    const keys = Object.keys(docGroups);
    let idx = 0;
    values.forEach((arr) => {
        let newTileSlider = <TileSlider key={keys[idx]+"_"+idx} title={keys[idx]} documents={arr || []} setDoc={setDocument} />
        tileSliders.push(newTileSlider);
        idx++;
    })

    return (
        <div className="Container-column TileGroup__container">
            <TileSlider title={"Priorität 1/2"} documents={docUrgency1 || []} setDoc={setDocument} />
            {tileSliders}
        </div>
    );
}

export default TileGroup;