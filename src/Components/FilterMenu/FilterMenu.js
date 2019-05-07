import React, { Component } from 'react';
import '../../css/base/container.css';
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
            <div className="FilterMenu Container-row Container-row--space-between">
                <div className="Container-row">
                    <button className="FilterMenu-button--update button--primary" onClick={this.updateFilter}></button>
                    <button className="FilterMenu-button--save button--primary" type="submit"></button>
                </div>
                <button className="FilterMenu-button--back button--primary" onClick={this.goBack}></button>
            </div>
        );
    }
}

export default FilterMenu;