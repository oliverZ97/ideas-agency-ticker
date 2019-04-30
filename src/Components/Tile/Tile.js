import React, { Component } from 'react';
import stripHtml from 'string-strip-html';
import './Tile.css';
import { browserHistory } from 'react-router'; 


//erhält über props title , etc und rendert
class Tile extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    document: this.props.document,
  }

  this.renderAsHtml = this.renderAsHtml.bind(this);
  this.stripHtmlText = this.stripHtmlText.bind(this);
  this.setDocument = this.setDocument.bind(this);
}

  renderAsHtml(text) {
    return { __html: text };
  }

  stripHtmlText(text) {
    return stripHtml(text)
  }

  setDocument() {
    let document = this.state.document;
    return this.props.setDoc(document);
  }
    
  render() {
    return (
      <div className="Tile" onClick={this.setDocument}>
        <div className="row">
          <p dangerouslySetInnerHTML={this.renderAsHtml(this.props.document.title)}></p>
  
          <button type="button"></button>
        </div>
        <div className="row">
          <h6>{this.props.document.publisher}</h6>
          <h6>{this.props.document.category}</h6>
          <h6>{this.props.document.dateCreated}</h6>
        </div>
        <p className="content">{this.stripHtmlText(this.props.document.content || '')}</p>
      </div>
    );
  }
  
}

export default Tile;