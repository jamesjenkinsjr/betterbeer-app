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
  //For the actual beer submission form, move to new component
  handleNewBeerSubmit(e) {
    //e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <div>
        <h1>BetterBeer</h1>
        <h2>Get the best prices from the locals you trust!</h2>
        <h3>Beer Feed:</h3>
        <button onClick={(e) => this.handleGetFeed()}>Feed!</button>
        <form action="/" onSubmit={(e) => this.handleFilteredFeed(e, document.getElementById('beer').value)}>
        <h3>Search for a beer:</h3>
          <input id="beer" type="text" name="beer" placeholder="ex. 'Wakulla', 'Big Nose'"/>
          <button type="submit">Filtered</button>
        </form>
        <form action="/submissions" method="get" onSubmit={(e) => this.handleNewBeerSubmit(e)}>
          <h3>Spotted a better deal? Submit it here:</h3>
          <input type="text" name="name" placeholder="Name of beer" required/>
          <br/>
          <label>$<input type="float" name="price" placeholder="4.00" required/></label>
          <br/>
          <select name="purchaseType" required>
          <option value="" selected disabled hidden>Choose type of purchase...</option>
            <option value="bottle">Single Bottle</option>
            <option value="draft">Draft Pour</option>
            <option value="can">Single Can</option>
            <option value="6pk">6-Pack</option>
            <option value="12pk">12-Pack</option>
            <option value="24pk">24-Pack</option>
          </select>
          <br/>
          <input type="float" name="lattitude" value="12.3456" hidden/>
          <input type="float" name="longitude" value="-65.4321" hidden/>
          <button type="submit">Submit Find</button>
        </form>
        <BeerEntry />
      </div>
    );
  }
}

export default App;
