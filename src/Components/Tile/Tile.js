import React, { Component } from 'react';
import stripHtml from 'string-strip-html';
import './Tile.css';
import '../../css/elements/button.css';
import '../../css/base/text.css';
import '../../css/layout/container.css';
import ShortDate from '../ShortDate/ShortDate';

//erhält über props title , etc und rendert
class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      document: this.props.document,
    }

    this.renderAsHtml = this.renderAsHtml.bind(this);
    this.setDocument = this.setDocument.bind(this);
  }

  renderAsHtml(text) {
    return { __html: stripHtml(text) };
  }

  setDocument() {
    let document = this.state.document;
    return this.props.setDoc(document);
  }

  render() {
    return (
      <div className="Tile" onClick={this.setDocument}>
        <div className="Container-row Container-row--flex-end Tile__container--meta">
          <h6 className="text__h--light Tile__h6">{this.props.document.publisher}</h6>
          <h6 className="text__h--light Tile__h6">{this.props.document.category}</h6>
          <ShortDate date={this.props.document.dateCreated}/>
        </div>
        <div className="Container-row Container-row--flex-end Tile__container--content">
          <p className="text--light Tile__text" dangerouslySetInnerHTML={this.renderAsHtml(this.props.document.title)}></p>
          <button className="pill pill__secondary pill--favorite"></button>
        </div>
      </div>
    );
  }
}

export default Tile;