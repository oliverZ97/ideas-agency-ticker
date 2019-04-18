import React, { Component } from 'react';
import './Tile.css';


//erhält über props title , etc und rednert
function Tile(props){

    function renderAsHtml(text) {
      return {__html: text};
    }
    return (
      <div className="Tile">
        <div className="row">
            <button type="button">
            </button>
        </div>
        <div className="row">
        <p dangerouslySetInnerHTML={renderAsHtml(props.title)}></p>
        </div>
      </div>
    );
  }

export default Tile;