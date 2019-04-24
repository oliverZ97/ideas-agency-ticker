import React, { Component } from 'react';
import './ListPageSearches.css'
import TileList from '../../Components/TileList/TileList';
import apiClient from '../../services/apiClient';
import ContentMenu from '../../Components/ContentMenu/ContentMenu';

class ListPageSearches extends Component {
    constructor() {
        super();
        this.state = {
            documents: [],
            query: '',
            displayAsList: true,
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
    }

    handleDisplayToggle() {
        this.setState({
            displayAsList: !this.state.displayAsList
        })
    }

    handleQuery(q) {
        this.setState({
            query: q
        })
    }

    handleSearch() {
        apiClient.search(this.state.query)
            .then((result) => {
                this.setState({
                    documents: result.documents
                })
            })
            .catch(() => {
                this.setState({
                    documents: []
                })
            })
    }

    render() {
        return (
            <div className="ListPageSearches">
                <div className="menu">
                    <ContentMenu toggleHandler={this.handleDisplayToggle} queryHandler={this.handleQuery} searchHandler={this.handleSearch}/>
                </div>

                <div className="searchresult">
                    {this.state.displayAsList &&
                        <TileList documents={this.state.documents} />
                    }

                    {!this.state.displayAsList &&
                        <div className="tiles">
                            <p>CRAZY list view netflix style</p>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default ListPageSearches;
