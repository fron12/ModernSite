import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGlobe } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <header className="top-header">
        <img className="logo" src="https://d3v5ezchayoty7.cloudfront.net/wp-content/uploads/2017/12/05005748/On-Q-Logo-Tagline-Optimized.png" alt="Company Name" />
        <div className="header-button-group">
          <div className="blue-button button-properties">Purchase or Refinance</div>
          <div className="orange-button button-properties">Find a Location</div>
        </div>
      </header>
      <section className="dropdown-categories">
        <a href="*">About on Q <FontAwesomeIcon icon={faAngleDown} /></a>
        <a href="*">Home Loans <FontAwesomeIcon icon={faAngleDown} /></a>
        <a href="*">Financial Tools <FontAwesomeIcon icon={faAngleDown} /></a>
        <a href="*">Mortage Education <FontAwesomeIcon icon={faAngleDown} /></a>
        <a href="*">Mortage News</a>
        <a href="*"><FontAwesomeIcon icon={faGlobe} /> EN <FontAwesomeIcon icon={faAngleDown} /></a>
      </section>
    </div>
  );
}

export default App;
