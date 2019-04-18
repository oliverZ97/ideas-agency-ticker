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
            query: 'merkel',
            displayAsList: true,
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
    }

    handleDisplayToggle() {
        this.setState({
            displayAsList: !this.state.displayAsList
        });
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
                    <ContentMenu />
                    <button onClick={this.handleSearch}>Merkel-Suche</button>
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
