import React, { Component } from 'react';
import './App.css';
import BeerEntry from './components/BeerEntry';
import { getAllBeerFeed, getFilteredBeerFeed } from './services/betterbeer-api.js';

class App extends Component {
  handleGetFeed(e) {
    getAllBeerFeed()
      .then(response => {
        const feed = response.data.submissions;
        console.log(feed);
      })
  }
  handleFilteredFeed(e, beer) {
    console.log(beer);
    e.preventDefault();
    getFilteredBeerFeed(beer)
      .then(response => {
        const filteredFeed = response.data.submissions;
        console.log(filteredFeed);
      })
  }
  render() {
    return (
      <div>
        <h1>BetterBeer</h1>
        <h2>Get the best prices from the locals you trust!</h2>
        <button onClick={(e) => this.handleGetFeed()}>Feed!</button>
        <form action="/" onSubmit={(e) => this.handleFilteredFeed(e, document.getElementById('beer').value)}>
          <input id="beer" type="text" name="beer" placeholder="ex. 'Wakulla', 'Big Nose'"/>
          <button type='submit'>Filtered</button>
        </form>
        <BeerEntry />
      </div>
    );
  }
}

export default App;
