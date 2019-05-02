import React, { Component } from 'react';
import { Link } from 'react-router';
import './FilterMenu.css';

class FilterMenu extends Component {
    constructor(props){
        super(props)

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch() {
       return this.props.searchHandler();
    }

    render() {
        return (
            <div className="FilterMenu">
                <div className="filter_options">
                    <button className="filter_update" onClick={this.handleSearch}></button>
                    <button className="filter_save" type="submit"></button>
                </div>
                <button className="filter_back"></button>
            </div>
        );
    }
}

export default FilterMenu;