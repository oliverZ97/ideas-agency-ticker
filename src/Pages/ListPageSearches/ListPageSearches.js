import React, { Component } from 'react';
import './ListPageSearches.css'
import TileList from '../../Components/TileList/TileList';
import apiClient from '../../services/apiClient';
import ContentMenu from '../../Components/ContentMenu/ContentMenu';
import DetailView from '../../Components/DetailView/DetailView';
import _ from 'lodash';
import Filter from '../../Components/Filter/Filter';

class ListPageSearches extends Component {
    constructor() {
        super();
        this.state = {
            documents: [],
            query: '',
            categories: null,
            urgencyLimit: '',
            displayAsList: true,
            activeDoc: null,
            detailActive: false,
            displayFilter: false
        }
        this.handleSearch = _.debounce(this.handleSearch.bind(this), 500);
        this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.setDocument = this.setDocument.bind(this);
        this.onClickCloseDetailView = this.onClickCloseDetailView.bind(this);
        this.handleCategories = this.handleCategories.bind(this);
        this.handleUrgencyLimit = this.handleUrgencyLimit.bind(this);
        this.handleDisplayFilter = this.handleDisplayFilter.bind(this);
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
        apiClient.search(this.state.query, this.state.urgencyLimit, this.state.categories)
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

    onClickCloseDetailView() {
        if (this.state.activeDoc !== null) {
            this.setState({
                activeDoc: null
            })
        }
    }

    handleUrgencyLimit(limit) {
        this.setState({
            urgencyLimit: limit
        })
    }

    handleCategories(catArray) {
        this.setState({
            categories: catArray
        })

    }

    handleDisplayFilter() {
        this.setState({
            displayFilter: !this.state.displayFilter
        })
    }

    render() {
        return (
            <div className="ListPageSearches">
                <div className="filter">
                    {this.state.displayFilter &&
                        <Filter
                            categoryHandler={this.handleCategories}
                            urgencyHandler={this.handleUrgencyLimit}
                            displayFilter={this.handleDisplayFilter}
                        />
                    }

                    {this.state.displayFilter === false &&
                        <div>
                            <div className="menu">
                                <ContentMenu
                                    toggleHandler={this.handleDisplayToggle}
                                    queryHandler={this.handleQuery}
                                    searchHandler={this.handleSearch}
                                    displayMode={this.state.displayAsList}
                                    displayFilter={this.handleDisplayFilter}
                                />
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
