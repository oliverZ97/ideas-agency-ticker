import React, { Component } from 'react';
import './FilterSubmenuTile.css';

class FilterSubmenuTile extends Component {
  constructor(props) {
    super(props);

    this.handleFilterContent = this.handleFilterContent.bind(this);
    this.handleActiveStatus = this.handleActiveStatus.bind(this);
  }

  handleFilterContent() {
    if(this.state.active){
      let content = this.props.name;
      return this.props.filterContent(content);
    } else {
      return;
    }
  }

  handleActiveStatus() {
      let name = this.props.content.name;
      let status = document.getElementById('checkbox').checked;
      console.log(name, status);
      return this.props.activeStatus(name, status);
  }

  render() {

    let random = Math.random()*100000000000;

    return (
      <div className="FilterSubmenuTile">
        <div className="checkbox">
          <label className="container">
            <input id="checkbox" className="tile-unchecked" type="checkbox" onClick={this.handleActiveStatus}></input>
            <span className="checkmark"></span>
          </label>
          <div className="tilename">
            <p>{this.props.content.name}</p>
          </div>
        </div >
        <div className="tileImg">
          
        </div>
      </div >
    );
  }
}

export default FilterSubmenuTile;