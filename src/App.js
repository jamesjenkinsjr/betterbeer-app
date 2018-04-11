import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
//components
import Navigation from './components/Navigation';
import BeerFeed from './components/BeerFeed';
import BeerSearch from './components/BeerSearch'
import BeerSubmission from './components/BeerSubmission'

class App extends Component {
  componentDidMount() {
    document.title = 'BetterBeer';
  }
  
  render() {
    return (
      <div class='content'>
        <Navigation />
        <Route exact path='/' component={BeerFeed} />
        <Route exact path='/search' component={BeerSearch} />
        <Route exact path='/submission' component={BeerSubmission} />
        
      </div>
    );
  }
}

export default withRouter(App);
