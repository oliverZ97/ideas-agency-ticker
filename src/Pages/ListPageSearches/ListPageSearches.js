import React, { Component } from 'react';
import './ListPageSearches.css'
import TileList from '../../Components/TileList/TileList';
import apiClient from '../../services/apiClient';
import ContentMenu from '../../Components/ContentMenu/ContentMenu';
import DetailView from '../../Components/DetailView/DetailView';
import _ from 'lodash';
import FilterPage from '../FilterPage/FilterPage';

class ListPageSearches extends Component {
    constructor() {
        super();
        this.state = {
            documents: [],
            query: '',
            displayAsList: true,
            activeDoc: null,
            detailActive: false,
        }
        this.handleSearch = _.debounce(this.handleSearch.bind(this), 500);
        this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.setDocument = this.setDocument.bind(this);
        this.onClickCloseDetailView = this.onClickCloseDetailView.bind(this);
    }

    componentWillMount() {
        this.handleSearch();
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
                console.log('Suche in ListPageSearches');
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

    onClickCloseDetailView() {
        if (this.state.activeDoc !== null) {
            this.setState({
                activeDoc: null
            })
        }
    }

    render() {
        return (
            <div className="ListPageSearches">
                <div className="menu">
                    <ContentMenu toggleHandler={this.handleDisplayToggle} queryHandler={this.handleQuery} searchHandler={this.handleSearch} displayMode={this.state.displayAsList} />
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
                        <DetailView className="detailView" document={this.state.activeDoc} closeDetail={this.onClickCloseDetailView} />
                    }
                </div>
            </div>
        );
    }
}

export default ListPageSearches;
