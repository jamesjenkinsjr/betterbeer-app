import React, { Component } from 'react';
import './App.css';
import BeerFeed from './components/BeerFeed';
import BeerSearch from './components/BeerSearch'
import BeerSubmission from './components/BeerSubmission'

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>BetterBeer</h1>
        <h2>Get the best prices from the locals you trust!</h2>
        <BeerSearch />
        <BeerFeed />
        <BeerSubmission />
      </div>
    );
  }
}

export default App;
