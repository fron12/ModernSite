import React, { Component } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  state = {
    position: 0,
    size: 'normal'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    let style = document.getElementsByClassName("dropdown-categories")[0].style;
    if(document.body.scroll > 120 || document.documentElement.scrollTop > 120){
      style.height = "57px";
      style.lineHeight = "57px";
    }
    else{
      style.height = "77px";
      style.lineHeight = "77px";
    }
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
        <a className="dropdown-main" href="*">Mortgage Education <FontAwesomeIcon icon={faAngleDown} /></a>
        <a className="dropdown-main" href="*">Mortgage News</a>
        <a className="dropdown-main" href="*"><FontAwesomeIcon icon={faGlobe} /> EN <FontAwesomeIcon icon={faAngleDown} /></a>
        <FontAwesomeIcon icon={faSearch} />
      </section>
      <section className="main-content">
        <div className="couch-with-bulldog"></div>
        <div className="image-words">
          <h1 className="mortgages-simplified image-words-color">
            Mortgages
            <br/>
            Simplified.
          </h1>
          <h2 className="get-prequalified image-words-color">
            Get prequalified or started on a loan
            <br/>
            application or refinance.
          </h2>
          <div className="image-button-group">
            <div className="blue-button image-button-properties">Purchase</div>
            <div className="blue-button image-button-properties">Refinance</div>
          </div>
        </div>
      </section>
      <section className="review-scores">
        <div className="score-group">
          <img src="https://d3v5ezchayoty7.cloudfront.net/wp-content/uploads/2017/04/03230746/Google_Widget_v3-07.png" alt="google review" />
        </div>
      </section>
    </div>
  );
  }
}

export default App;
