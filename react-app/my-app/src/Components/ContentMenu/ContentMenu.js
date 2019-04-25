import React, { Component } from 'react';
import './ContentMenu.css';

class ContentMenu extends Component {
    constructor(props){
        super(props);

        this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.changeToggleButton = this.changeToggleButton.bind(this);
    }

    handleDisplayToggle(){
        this.props.toggleHandler();
        this.changeToggleButton();
    }

    handleSearch(){
        let qString = document.getElementById("navigation_searchbar").value;
        this.props.queryHandler(qString);
        this.props.searchHandler();
    }

    handleKeyPress(event){

        let eventIsEnter = event.key == 'Enter';

        if(eventIsEnter){
            this.handleSearch();
        }
    }

    changeToggleButton() {
        if(this.props.displayMode){
            document.getElementById('toggleDisplay').className = 'displayList';
        } else {
            document.getElementById('toggleDisplay').className = 'displayTile';
        }
    }

    render() {
        return (
            <div className="ContentMenu">
                <input id="navigation_searchbar" type="text" placeholder="Search" onKeyPress={this.handleKeyPress} onChange={this.handleSearch}></input>
                <button id="toggleDisplay" className="displayTile" onClick={this.handleDisplayToggle}></button>
            </div>
        );
    }
}

export default ContentMenu;
