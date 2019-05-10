import React from 'react';
import './TileGroup.css';
import TileSlider from './TileSlider/TileSlider';

function TileGroup(props) {
    function setDocument(document) {
        return props.setDoc(document);
    }

    function getTileSliderWithDocumentsLessThanUrgency(documents, urgency) {
        let urgencyDocs = documents.filter((document) => {
            return document.urgency < urgency;
        });
        return <TileSlider title={"Priorität 1/2"} documents={urgencyDocs || []} setDoc={setDocument} />
    }

    function getTileSlidersForEachCategory(documents) {

        // calculate grouping
        let docGroups = {};
        documents.forEach(element => {
            let category = element.category;
            if (docGroups[category]) {
                docGroups[category].push(element);
            } else {
                docGroups[category] = [];
                docGroups[category].push(element);
            }
        })

        // generate tile sliders
        const keys = Object.keys(docGroups);
        return keys.map(key => <TileSlider key={key} title={key} documents={docGroups[key] || []} setDoc={setDocument} />);
    }

    return (
        <div className="Container-column TileGroup__container">
            {getTileSliderWithDocumentsLessThanUrgency(props.documents, 3)}
            {getTileSlidersForEachCategory(props.documents)}
        </div>
    );
}

export default TileGroup;