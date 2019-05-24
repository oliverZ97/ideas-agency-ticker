import React from 'react';
import stripHtml from 'string-strip-html';
import './DetailView.scss';

class DetailView extends React.Component {
  constructor(props) {
    super(props);

    this.renderAsHtml = this.renderAsHtml.bind(this);
    this.stripHtmlText = this.stripHtmlText.bind(this);
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
    let random = Math.random() * 100000000000;

    return (
      <div className="detailView">
        <div className="container-row--space-between">
          <button className="pill__primary pill--favorite-l" type="button"></button>
          <button className="pill__primary pill--back" onClick={this.onClickCloseDetailView}></button>
        </div>
        <h4 className="headline headline__special" dangerouslySetInnerHTML={this.renderAsHtml(this.props.document.title)}></h4>
        <div className="container-row--space-between">
          <p className="headline__tertiary headline--light">{this.props.document.publisher}/{this.props.document.category}</p>
          <p className="headline__tertiary headline--light">{this.props.document.dateCreated}</p>
        </div>
        <img className="detailView__img" alt="Beispielbild" src={"https://picsum.photos/600/250?rand=" + random}></img>
        <p className="text__primary text--light">{this.stripHtmlText(this.props.document.content || '')}</p>

      </div>
    );
  }
}

export default DetailView;