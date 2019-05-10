import React, { Component } from 'react';
import './ContentMenu.css';
import '../../css/elements/pill.css';
import '../../css/layout/container.css';

class ContentMenu extends Component {
    constructor(props){
        super(props);

        this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.changeToggleButton = this.changeToggleButton.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleDisplayToggle(){
        this.props.toggleHandler();
        this.changeToggleButton();
    }

    handleSearch(){
        let qString = document.getElementById("searchbar").value;
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
            document.getElementById('toggleDisplay').className = 'pill pill__primary pill--displayList';
        } else {
            document.getElementById('toggleDisplay').className = 'pill pill__primary pill--displayTile';
        }
    }

    handleFilterClick() {
       return this.props.displayFilter();
    }

    render() {
        return (
            <div className="ContentMenu">
                <input id="searchbar" className="Form__input--round" type="text" placeholder="Search" onKeyPress={this.handleKeyPress} onChange={this.handleSearch}></input>
                <div className="ContentMenu_Buttons Container-row Container-row--space-between">
                <button className="pill pill__primary pill--filter" onClick={this.handleFilterClick}></button>
                <button id="toggleDisplay" className="pill pill__primary pill--displayTile" onClick={this.handleDisplayToggle}></button>
                </div> 
            </div>
        );
    }
}

export default ContentMenu;
