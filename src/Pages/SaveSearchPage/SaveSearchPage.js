import React, { Component } from 'react';
import { Link } from 'react-router';
import './SaveSearchPage.css';
import SlideInView from '../../Components/SlideInView/SlideInView';
import SavedSearches from '../../Components/SavedSearches/SavedSearches';

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