import React, { Component } from 'react';
import '../../../css/layout/container.css';
import '../../../css/elements/pill.css';

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
                    <button className="pill pill__primary pill--update" onClick={this.updateFilter}></button>
                    <button className="pill pill__primary pill--save" type="submit"></button>
                </div>
                <button className="pill pill__primary pill--back" onClick={this.goBack}></button>
            </div>
        );
    }
}

export default FilterMenu;