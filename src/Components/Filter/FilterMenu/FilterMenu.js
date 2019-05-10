import React, { Component } from 'react';
import '../../../css/layout/container.css';
import '../../../css/elements/pill.css';
import './FilterMenu.css';

class FilterMenu extends Component {
    constructor(props){
        super(props)

        this.updateFilter = this.updateFilter.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    updateFilter() {
        return this.props.displayFilter(true);
    }

    goBack() {
        return this.props.displayFilter(false);
    }

    render() {
        return (
            <div className="FilterMenu">
                <div className="FilterMenu__container">
                    <button className="FilterMenu__pill pill--update" onClick={this.updateFilter}></button>
                    <button className="FilterMenu__pill pill--save" type="submit"></button>
                </div>
                <button className="FilterMenu__pill pill--back" onClick={this.goBack}></button>
            </div>
        );
    }
}

export default FilterMenu;