import React, { Component } from 'react';
import stripHtml from 'string-strip-html';
import './DetailView.css';
import '../../css/modules/button.css';

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
      <div className="DetailView">
        <button className="button--primary DetailView-button--back" onClick={this.onClickCloseDetailView}></button>
        <h4 className="DetailView__title" dangerouslySetInnerHTML={this.renderAsHtml(this.props.document.title)}></h4>
        <button className="button--primary DetailView-button--favorite" type="button"></button>
        <p className="DetailView__date">{this.props.document.dateCreated}</p>
        <p className="DetailView__agency">{this.props.document.publisher}/{this.props.document.category}</p>
        <img className="DetailView__img" alt="Beispielbild" src={"https://picsum.photos/600/250?rand=" + random}></img>
        <p className="DetailView__text">{this.stripHtmlText(this.props.document.content || '')}</p>
        <h6 className="DetailView__author">{this.props.document.author}</h6>
      </div>
    );
  }
}

export default DetailView;