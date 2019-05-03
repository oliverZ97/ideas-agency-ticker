import React, { Component } from 'react';
import { Link } from 'react-router';
import './FilterMenu.css';
import {browserHistory} from 'react-router'

class FilterMenu extends Component {
    constructor(props){
        super(props)

        this.updateFilter = this.updateFilter.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    updateFilter() {
        browserHistory.push('/list-search');
       return this.props.searchHandler();
    }

    goBack() {
        browserHistory.push('/list-search');
    }

    render() {
        return (
            <div className="FilterMenu">
                <div className="filter_options">
                    <button className="filter_update" onClick={this.updateFilter}></button>
                    <button className="filter_save" type="submit"></button>
                </div>
                <button className="filter_back" onClick={this.goBack}></button>
            </div>
        );
    }
}

export default FilterMenu;