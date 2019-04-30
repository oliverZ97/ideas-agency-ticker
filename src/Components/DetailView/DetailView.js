import React, { Component } from 'react';
import { Link } from 'react-router';
import stripHtml from 'string-strip-html';
import "./DetailView.css";

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
        <button className="detail_back" onClick={this.onClickCloseDetailView}></button>
        <h4 className="detail_title" dangerouslySetInnerHTML={this.renderAsHtml(this.props.document.title)}></h4>
        <button className="detail_fav" type="button"></button>
        <p className="detail_date">{this.props.document.dateCreated}</p>
        <p className="detail_agency">{this.props.document.publisher}/{this.props.document.category}</p>
        <img className="detail_img" alt="Beispielbild" src={"https://picsum.photos/600/250?rand=" + random}></img>
        <p className="detail_text">{this.stripHtmlText(this.props.document.content || '')}</p>
        <h6 className="detail_author">{this.props.document.author}</h6>
      </div>
    );
  }
}

export default DetailView;