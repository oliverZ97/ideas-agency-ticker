import React, { Component } from 'react';
import stripHtml from 'string-strip-html';
import './Tile.css';


//erhält über props title , etc und rednert
function Tile(props) {

  function renderAsHtml(text) {
    return { __html: text };
  }

  function stripHtmlText(text) {
    return stripHtml(text)
  }

  return (
    <div className="Tile">
      <div className="row">
        <p dangerouslySetInnerHTML={renderAsHtml(props.title)}></p>

        <button type="button"></button>
      </div>
      <div className="row">
        <h6>{props.agency}</h6>
        <h6>{props.category}</h6>
        <h6>{props.date}</h6>
      </div>
      <p className="content">{stripHtmlText(props.content || '')}</p>
    </div>
  );
}

export default Tile;