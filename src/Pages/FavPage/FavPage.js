import React from 'react';
import { browserHistory } from 'react-router';
import './FavPage.scss';
import Favorites from '../../Components/Favorites/Favorites';

function FavPage() {

  function handleBackClick() {
    browserHistory.push('/list-search');
  }

  return (
    <div className="favPage">
      <button className="pill__primary pill--back" onClick={handleBackClick}></button>
      <Favorites />
    </div>
  );
}

export default FavPage;