import React, { Component } from 'react';
import './ContentMenu.css';

class ContentMenu extends Component {
    constructor(props){
        super(props);

        this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleDisplayToggle(){
        this.props.toggleHandler();
    }

    handleSearch(){
        let qString = document.getElementById("navigation_searchbar").value;
        this.props.queryHandler(qString);
        this.props.searchHandler();
    }

    handleKeyPress(event){

        let eventIsEnter = false; // do it

        if(eventIsEnter){
            this.handleSearch();
        }
        console.log(event);
    }

    render() {
        return (
            <div className="ContentMenu">
                <div className="toggle">
                    <label className="auto-reload-toggle">
                        <input type="checkbox" name="toggle"></input>
                        <span className="toggle-slider"></span>
                    </label>
                    <label className="toggle-label" of="toggle">Auto-Aktualisieren</label>
                </div>
                <button onClick={this.handleDisplayToggle}>Kachelansicht</button>
                <input id="navigation_searchbar" type="text" placeholder="Search" onKeyDown={this.handleKeyPress} onChange={this.handleSearch}></input>
            </div>
        );
    }
}

export default ContentMenu;
