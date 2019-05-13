import React, { Component } from 'react';
import stripHtml from 'string-strip-html';
import './DetailView.css';
import '../../css/elements/button.css';
import '../../css/base/text.css';
import '../../css/base/hero.css';
import '../../css/base/headline.css';

class DetailView extends React.Component {
  constructor(props){
    super(props);

    this.renderAsHtml = this.renderAsHtml.bind(this);
    this.stripHtmlText= this.stripHtmlText.bind(this);
    this.onClickCloseDetailView = this.onClickCloseDetailView.bind(this);
  }

  renderAsHtml(text) {
    return { __html: text };
  }

  stripHtmlText(text) {
    return stripHtml(text)
  }

  onClickCloseDetailView() {
    this.props.closeDetail();
  }
 
  render() {
    let random = Math.random()*100000000000;

    return (
      <div className="detailView">
        <button className="detailView__pill pill--back detailView-button--back" onClick={this.onClickClosedetailView}></button>
        <h4 className="detailView__title" dangerouslySetInnerHTML={this.renderAsHtml(this.props.document.title)}></h4>
        <button className="detailView__pill pill--favorite detailView-button--favorite" type="button"></button>
        <p className="detailView__headline detailView__date">{this.props.document.dateCreated}</p>
        <p className="detailView__headline detailView__agency">{this.props.document.publisher}/{this.props.document.category}</p>
        <img className="detailView__img" alt="Beispielbild" src={"https://picsum.photos/600/250?rand=" + random}></img>
        <p className="detailView__text">{this.stripHtmlText(this.props.document.content || '')}</p>
  
      </div>
    );
  }
}

export default DetailView;