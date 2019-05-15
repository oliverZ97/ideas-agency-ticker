import React, { Component } from 'react';

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
            <div className="container-row--space-between">
                <div className="container-row">
                    <button className="pill__primary pill--update" onClick={this.updateFilter}></button>
                    <button className="pill__primary pill--save" type="submit"></button>
                </div>
                <button className="pill__primary pill--back" onClick={this.goBack}></button>
            </div>
        );
    }
}

export default FilterMenu;