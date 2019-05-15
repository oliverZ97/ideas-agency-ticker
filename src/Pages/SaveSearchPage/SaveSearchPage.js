import React from 'react';
import { browserHistory } from 'react-router';
import './SaveSearchPage.scss';
import SavedSearches from '../../Components/SavedSearches/SavedSearches';

function SaveSearchPage() {
  function handleBackClick() {
    browserHistory.push('/list-search');
  }

  return (
    <div className="saveSearchPage">
      <button className="pill__primary pill--back" onClick={handleBackClick}></button>
      <SavedSearches />
    </div>
  );
}

export default SaveSearchPage;