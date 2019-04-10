import React, { Component } from 'react';
import './SaveSearchPage.css';
import SlideInView from '../../SlideInView/SlideInView';
import SavedSearches from '../../SavedSearches/SavedSearches';

class SaveSearchPage extends Component {
  render() {
    return (
      <div className="SaveSearchPage">
        <SavedSearches />
      </div>
    );
  }
}

export default SaveSearchPage;