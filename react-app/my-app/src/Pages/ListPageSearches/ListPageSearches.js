import React, { Component } from 'react';
import './ListPageSearches.css'
import TileList from '../../Components/TileList/TileList';
import apiClient from '../../services/apiClient';
import ContentMenu from '../../Components/ContentMenu/ContentMenu';
import DetailView from '../../Components/DetailView/DetailView';
import _ from 'lodash';

class ListPageSearches extends Component {
    constructor() {
        super();
        this.state = {
            documents: [],
            query: '',
            displayAsList: true,
            activeDoc: null
        }
        this.handleSearch = _.debounce(this.handleSearch.bind(this), 500);
        this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.setDocument = this.setDocument.bind(this);
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

    setDocument(document) {
        this.setState({
            activeDoc: document
        })
        console.log(this.state.activeDoc);
    }

    render() {
        return (
            <div className="ListPageSearches">
                <div className="menu">
                    <ContentMenu toggleHandler={this.handleDisplayToggle} queryHandler={this.handleQuery} searchHandler={this.handleSearch}/>
                </div>

                <div className="searchresult">
                    {this.state.displayAsList &&
                        <TileList documents={this.state.documents} setDoc={this.setDocument} />
                    }

                    {!this.state.displayAsList &&
                        <div className="tiles">
                            <p>CRAZY list view netflix style</p>
                        </div>
                    }
                </div>

                <div>

                    {this.state.activeDoc === null &&
                        <div>
                            <p>nothing to show</p>   
                        </div> 
                    }

                    {this.state.activeDoc !== null &&
                        <DetailView document={this.state.activeDoc}/>
                    }
                </div>
            </div>
        );
    }
}

export default ListPageSearches;