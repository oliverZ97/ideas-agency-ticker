import React from 'react';
import { browserHistory } from 'react-router';
import './FavPage.scss';
import Favorites from '../../Components/Favorites/Favorites';

function FavPage() {

  function handleBackClick() {
    browserHistory.push('/list-search');
  }

  return (
    <div className="favPage container-column--items-centered">
      <div className="favPage__container">
        <button className="pill__primary pill--back" onClick={handleBackClick}></button>
      </div>
      <Favorites />
    </div>
  );
}

export default FavPage;