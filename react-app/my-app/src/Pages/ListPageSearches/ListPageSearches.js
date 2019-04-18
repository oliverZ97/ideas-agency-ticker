import React, { Component } from 'react';
import './ListPageSearches.css'
import TileList from '../../Components/TileList/TileList';
import apiClient from '../../services/apiClient';

class ListPageSearches extends Component {
    constructor() {
        super();
        this.state = {
            documents: [],
            query: 'merkel'
        }
        this.handleSearch = this.handleSearch.bind(this);
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
        <label className="auto-reload-toggle">
            <input type="checkbox" name="toggle"></input>
            <span className="toggle-slider"></span>
        </label>
        <label className="toggle-label"of="toggle">Auto-Aktualisieren</label>
        <button onClick={this.handleSearch}>Merkel-Suche</button> 
        
        <TileList documents={this.state.documents}/>
      </div>
    );
  }
}

export default ListPageSearches;
