import React, { Component } from 'react';
import { Link } from 'react-router';
import './SaveSearchPage.css';
import SlideInView from '../../SlideInView/SlideInView';
import SavedSearches from '../../SavedSearches/SavedSearches';

class SaveSearchPage extends Component {
  render() {
    return (
      <div className="SaveSearchPage">
        <Link to="/list"><button className="ssearches_back"></button></Link>
        <SavedSearches />
      </div>
    );
  }
}

export default SaveSearchPage;