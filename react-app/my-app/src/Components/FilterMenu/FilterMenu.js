import React, { Component } from 'react';
import { Link } from 'react-router';
import './FilterMenu.css';

class FilterMenu extends Component {
    render() {
        return (
            <div className="FilterMenu">
                <div className="filter_options">
                    <button className="filter_update" type="submit"><Link to="/list-search"></Link></button>
                    <button className="filter_save" type="submit"></button>
                </div>
                <button className="filter_back"></button>
            </div>
        );
    }
}

export default FilterMenu;