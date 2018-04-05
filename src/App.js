import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
//components
import Navigation from './components/Navigation';
import BeerFeed from './components/BeerFeed';
import BeerSearch from './components/BeerSearch'
import BeerSubmission from './components/BeerSubmission'

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>BetterBeer</h1>
        <h2>Get the best prices from the locals you trust!</h2>
        <Navigation />
        <Route exact path='/' component={BeerFeed} />
        <Route exact path='/search' component={BeerSearch} />
        <Route exact path='/submission' component={BeerSubmission} />
        
      </div>
    );
  }
}

export default withRouter(App);
