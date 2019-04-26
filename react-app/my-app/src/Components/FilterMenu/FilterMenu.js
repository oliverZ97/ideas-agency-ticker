import React, { Component } from 'react';
import { Link } from 'react-router';
import './FilterMenu.css';

class FilterMenu extends Component {
    constructor(props){
        super(props)

        this.sendFilterContent = this.sendFilterContent.bind(this);
    }

    sendFilterContent() {
        //gibt Go um die Suche mit den Filterkriterien zu starten
        // Verbindung zu Filter.js
    }

    render() {
        return (
            <div className="FilterMenu">
                <div className="filter_options">
                    <button className="filter_update" onClick={this.sendFilterContent}></button>
                    <button className="filter_save" type="submit"></button>
                </div>
                <button className="filter_back"></button>
            </div>
        );
    }
}

export default FilterMenu;