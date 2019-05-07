import React, { Component } from 'react';
import stripHtml from 'string-strip-html';
import './Tile.css';
import { browserHistory } from 'react-router';
import '../../css/modules/button.css';
import '../../css/base/text.css';
import '../../css/base/container.css';


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

  getShortDate() {

  }

  render() {
    return (
      <div className="Tile" onClick={this.setDocument}>
        <div className="Container-row Container-row--flex-end Tile__container--meta">
          <h6 className="text__h--light Tile__h6">{this.props.document.publisher}</h6>
          <h6 className="text__h--light Tile__h6">{this.props.document.category}</h6>
          <h6 className="text__h--light Tile__h6">{this.props.document.dateCreated}</h6>
        </div>
        <div className="Container-row Container-row--flex-end Tile__container">
          <p className="text--light Tile__text" dangerouslySetInnerHTML={this.renderAsHtml(this.props.document.title)}></p>
          <button className="button--small button--favorite" type="button"></button>
        </div>
      </div>
    );
  }
  /**<p className="text--light Tile__text Tile__text--hiddenoverflow">{this.stripHtmlText(this.props.document.content || '')}</p> */
}

export default Tile;