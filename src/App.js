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
    let fastyle = document.getElementsByClassName("fa-search")[0].style;
    if(document.body.scroll >= 50 || document.documentElement.scrollTop >= 50){
      style.height = "57px";
      style.lineHeight = "57px";
      fastyle.marginTop = "20px";
    }
    else if (document.body.scroll <= 30 || document.documentElement.scrollTop <= 30){
      style.height = "77px";
      style.lineHeight = "77px";
      fastyle.marginTop = "29px";
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
          <a href="*"> 
            <img className="review-image" src="https://d3v5ezchayoty7.cloudfront.net/wp-content/uploads/2017/04/03230746/Google_Widget_v3-07.png" alt="google review" />
          </a>
          <a href="*">
            <img className="review-image" src="https://d3v5ezchayoty7.cloudfront.net/wp-content/uploads/2017/04/03230759/Google_Widget_v3-08.png" alt="zillow review" />
          </a>
        </div>
      </section>
      <section className="blurb-section">
        <h2 className="blurb-question">What can we help you with today?</h2>
        <div className="blurb-columns">
          <div className="blurb">
            <div className="blurb-top">
              <h4><a className="blurb-title" href="*">Refinance Your Home</a></h4>
              <p className="blurb-text">Are you considering refinancing your home loan to reduce your monthly payment, borrowing against your equity, or simply switching to an adjustable or fixed rate loan? Whatever your goals, we offer a variety of options to help.</p>
            </div>
            <div className="blurb-bottom">
              <h4><a className="blurb-title" href="*">Mortgage Calculator</a></h4>
              <p className="blurb-text">Use our mortgage payment calculator to find out your housing affordability, estimate your monthly mortgage payments, and more. Just enter in a few specifics about the home you’re interested in and we can show you information that will help you make an informed financial decision.</p>
            </div>
          </div>
          <div className="blurb">
            <div className="blurb-top">
              <h4><a className="blurb-title" href="*">First Time Home Buyer?</a></h4>
              <p className="blurb-text">Buying your first home is exciting and one of the biggest financial decisions you’ll ever make. We can help you get prequalified for a first time home buyer loan program, knowing what you can comfortably afford. We’ll advise you on grants and programs available to first time home buyers and make your home buying experience a great one.</p>
            </div>
            <div className="blurb-bottom">
              <h4><a className="blurb-title" href="*">Home Loan Options</a></h4>
              <p className="blurb-text">Learn more about all of the mortgage options available to you, whether you’re a veteran looking to take advantage of a VA home loan or looking for down payment assistance programs – we have a number of home loan programs available.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="video">
        <iframe src="https://player.vimeo.com/video/302160846?dnt=1&app_id=122963" width="320" height="240" title="On-Q-Video" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </section>
    </div>
  );
  }
}

export default App;
