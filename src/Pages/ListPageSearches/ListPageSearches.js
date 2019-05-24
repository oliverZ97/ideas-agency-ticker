import React, { Component } from 'react';
import './ListPageSearches.scss';
import TileList from '../../Components/TileList/TileList';
import apiClient from '../../services/apiClient';
import ContentMenu from '../../Components/ContentMenu/ContentMenu';
import DetailView from '../../Components/DetailView/DetailView';
import _ from 'lodash';
import Filter from '../../Components/Filter/Filter';
import TileGroup from '../../Components/TileGroup/TileGroup';

class ListPageSearches extends Component {
    constructor() {
        super();
        this.state = {
            documents: [],
            query: '',
            categories: [],
            urgencyLimit: 8,
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
        this.startSearch = this.startSearch.bind(this);
    }

    componentWillMount() {
        this.handleSearch();
    }

    componentDidMount() {
        document.addEventListener("keydown", this.startSearch, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.startSearch, false);
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

    handleDisplayFilter(triggerSearch) {
        this.setState({
            displayFilter: !this.state.displayFilter
        })
        if (triggerSearch) {
            this.handleSearch();
        }
    }

    startSearch(event) {
        if (event.keyCode === 13) {
            this.handleSearch();
        }
    }

    render() {
        return (
            <div className="listPageSearches">
                {this.state.displayFilter &&
                    <Filter
                        categories={this.state.categories}
                        urgencyLimit={this.state.urgencyLimit}
                        categoryHandler={this.handleCategories}
                        urgencyHandler={this.handleUrgencyLimit}
                        displayFilter={this.handleDisplayFilter}
                    />
                }

                {!this.state.displayFilter &&
                    <div>
                        <div className="container-row--space-between menu">
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
                                <TileGroup documents={this.state.documents} setDoc={this.setDocument} />
                            }
                        </div>
                    </div>
                }
                <div>

                    {this.state.activeDoc &&
                        <DetailView document={this.state.activeDoc} closeDetail={this.onClickCloseDetailView} />
                    }
                </div>
            </div>
        );
    }
}

export default ListPageSearches;
