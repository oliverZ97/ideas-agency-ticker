

import React, { Component } from 'react';
import './ToggleButton.css';

class ToggleButton extends Component {

    render() {
        return (
            <div className="toggle">
                <label className="auto-reload-toggle">
                    <input type="checkbox" name="toggle"></input>
                    <span className="toggle-slider"></span>
                </label>
                <label className="toggle-label" of="toggle">Auto-Aktualisieren</label>
            </div>
        );
    }
}

export default ToggleButton;