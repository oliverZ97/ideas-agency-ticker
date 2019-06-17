import React, { Component } from 'react';

class ContentMenu extends Component {
    constructor(props) {
        super(props);

        this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.changeToggleButton = this.changeToggleButton.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleDisplayToggle() {
        this.props.toggleHandler();
        this.changeToggleButton();
    }

    handleSearch() {
        let qString = document.getElementById("searchbar").value;
        this.props.queryHandler(qString);
        this.props.searchHandler();
    }

    handleKeyPress(event) {

        let eventIsEnter = event.key == 'Enter';

        if (eventIsEnter) {
            this.handleSearch();
        }
    }

    changeToggleButton() {
        if (this.props.displayMode) {
            document.getElementById('toggleDisplay').className = 'pill__primary pill--displayList';
        } else {
            document.getElementById('toggleDisplay').className = 'pill__primary pill--displayTile';
        }
    }

    handleFilterClick() {
        return this.props.displayFilter();
    }

    render() {
        return (
            <div className="container-row--space-between contentMenu">
                <input id="searchbar" className="form__input--round text__secondary" type="text" placeholder="Search" onKeyPress={this.handleKeyPress} onChange={this.handleSearch}></input>
                <div>
                    <button className="pill__primary pill--filter" onClick={this.handleFilterClick}></button>
                    <button id="toggleDisplay" className="pill__primary pill--displayTile" onClick={this.handleDisplayToggle}></button>
                </div>
            </div>
        );
    }
}

export default ContentMenu;
