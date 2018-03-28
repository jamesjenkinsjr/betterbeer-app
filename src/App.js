import React, { Component } from 'react';
import './App.css';
import BeerEntry from './components/BeerEntry';
import { getAllBeerFeed } from './services/betterbeer-api.js';

class App extends Component {
  handleGetFeed(e) {
    getAllBeerFeed()
      .then(response => {
        const feed = response.data.submissions;
        console.log(feed);
      })
  }
  render() {
    return (
      <div>
        <h1>BetterBeer</h1>
        <h2>Get the best prices from the locals you trust!</h2>
        <button onClick={(e) => this.handleGetFeed()}>Feed!</button>
        <BeerEntry />
      </div>
    );
  }
}

export default App;
