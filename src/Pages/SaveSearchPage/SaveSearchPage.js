import React from 'react';
import { browserHistory } from 'react-router';
import './SaveSearchPage.css';
import '../../css/elements/pill.css';
import SavedSearches from '../../Components/SavedSearches/SavedSearches';

function SaveSearchPage() {
  function handleBackClick() {
    browserHistory.push('/list-search');
  }

  return (
    <div className="saveSearchPage">
      <button className="pill pill__primary pill--back" onClick={handleBackClick}></button>
      <SavedSearches />
    </div>
  );
}

export default SaveSearchPage;