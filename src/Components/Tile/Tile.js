import React from 'react';
import stripHtml from 'string-strip-html';
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
      <div className="tile" onClick={this.setDocument}>
        <div className="tile__meta">
          <h6 className="headline__tertiary headline--light">{this.props.document.publisher}</h6>
          <h6 className="headline__tertiary headline--light">{this.props.document.category}</h6>
          <ShortDate date={this.props.document.dateCreated}/>
        </div>
        <div className="tile__content">
          <p className="tile__text text--light" dangerouslySetInnerHTML={this.renderAsHtml(this.props.document.title)}></p>
          <button className="pill__secondary pill--favorite"></button>
        </div>
      </div>
    );
  }
}

export default Tile;