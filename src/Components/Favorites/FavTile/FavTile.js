import React, { Component } from 'react';
import './FavTile.scss';

class FavTile extends Component {
  render() {
    return (
      <div className="tile">
        <div className="tile__meta">
          <h6 className="headline__tertiary headline--light">DPA</h6>
          <h6 className="headline__tertiary headline--light">Politik</h6>
          <h6 className="headline__tertiary headline--light">2019-05-24T11:38</h6>
        </div>
        <div className="tile__content">
          <p className="tile__text text--light">Großenbaum: Vermeintlicher Ladendieb hatte drei Haftbefehle offen</p>
          <button className="pill__secondary pill--favorite"></button>
        </div>
      </div>
    );
  }
}

export default FavTile;
