import React, { Component } from 'react';
import './ContentMenu.css';

class ContentMenu extends Component {


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
                <input id="navigation_searchbar" type="text" placeholder="Search"></input>
            </div>
        );
    }
}

export default ContentMenu;
