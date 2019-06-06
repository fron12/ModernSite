import React, { Component } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  state = {
    position: window.pageYOffset
  }
  componentDidMount(){
    console.log(this.state.position);
  }
  render(){
  return (
    <div className="container">
      <header className="top-header">
        <img className="logo" src="https://d3v5ezchayoty7.cloudfront.net/wp-content/uploads/2017/12/05005748/On-Q-Logo-Tagline-Optimized.png" alt="Company Name" />
        <div className="header-button-group">
          <div className="blue-button button-properties">Purchase or Refinance</div>
          <div className="orange-button button-properties">Find a Location</div>
        </div>
      </header>
      <section className="dropdown-categories">
        <a className="dropdown-main" href="*">About on Q <FontAwesomeIcon icon={faAngleDown} /></a>
        <a className="dropdown-main" href="*">Home Loans <FontAwesomeIcon icon={faAngleDown} /></a>
        <a className="dropdown-main" href="*">Financial Tools <FontAwesomeIcon icon={faAngleDown} /></a>
        <a className="dropdown-main" href="*">Mortage Education <FontAwesomeIcon icon={faAngleDown} /></a>
        <a className="dropdown-main" href="*">Mortage News</a>
        <a className="dropdown-main" href="*"><FontAwesomeIcon icon={faGlobe} /> EN <FontAwesomeIcon icon={faAngleDown} /></a>
        <FontAwesomeIcon icon={faSearch} />
      </section>
      <section className="couch-with-bulldog">
        <div className="image-words">
          <div>Mortage Simplified.</div>
          <p>Get prequalified or started ona  loan application or refinance.</p>
          <div className="image-button-group">
            <div className="blue-button button-properties">Purchase</div>
            <div className="blue-button button-properties">Refinance</div>
          </div>
        </div>
      </section>
    </div>
  );
  }
}

export default App;
