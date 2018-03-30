import React, { Component } from 'react';
import './App.css';
import BeerEntry from './components/BeerEntry';
import BeerFeed from './components/BeerFeed';
import { getAllBeerFeed, getFilteredBeerFeed, pushNewBeer } from './services/betterbeer-api.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      entry: {
        name: '',
        price: null,
        purchaseType: '',
        latitude: 12.3456,
        longitude: -65.4321,
      }
    }
  }
  
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
    e.preventDefault();
    console.log(this.state.entry);
    const entry = this.state.entry;
    pushNewBeer(entry) 
      .then(response => {      
        console.log(response)
      })
  }
  render() {
    return (
      <div>
        <h1>BetterBeer</h1>
        <h2>Get the best prices from the locals you trust!</h2>
        <BeerFeed />
        <form onSubmit={(e) => this.handleFilteredFeed(e, document.getElementById('beer').value)}>
        <h3>Search for a beer:</h3>
          <input id="beer" type="text" name="beer" placeholder="ex. 'Wakulla', 'Big Nose'"/>
          <button type="submit">Filtered</button>
        </form>
        <form onSubmit={(e) => this.handleNewBeerSubmit(e)}>
          <h3>Spotted a better deal? Submit it here:</h3>
          <input 
            type="text" 
            name="name" 
            placeholder="Name of beer" 
            value={this.state.entry.name} 
            onChange={(e) => {
              this.setState({
                entry: {
                  ...this.state.entry,
                  name: e.target.value
                }
              })
            }} 
            required/>
          <br/>
          <label>$
            <input 
              type="float" 
              name="price" 
              placeholder="4.00" 
              value={this.state.entry.price} 
              onChange={(e) => {
                this.setState({
                  entry: {
                    ...this.state.entry,
                    price: e.target.value
                  }
                })
              }} 
              required/></label>
          <br/>
          <select 
            name="purchaseType" 
            value={this.state.entry.purchaseType} 
              onChange={(e) => {
                this.setState({
                  entry: {
                    ...this.state.entry,
                    purchaseType: e.target.value
                  }
                })
              }} 
            required>
          <option value="" selected disabled hidden>Choose type of purchase...</option>
            <option value="bottle">Single Bottle</option>
            <option value="draft">Draft Pour</option>
            <option value="can">Single Can</option>
            <option value="6pk">6-Pack</option>
            <option value="12pk">12-Pack</option>
            <option value="24pk">24-Pack</option>
          </select>
          <br/>
          <input 
            type="float" 
            name="latitude" 
            value={this.state.entry.latitude} 
              onChange={(e) => {
                this.setState({
                  entry: {
                    ...this.state.entry,
                    latitude: e.target.value
                  }
                })
              }} 
            hidden/>
          <input 
            type="float" 
            name="longitude" 
            value={this.state.entry.longitude} 
              onChange={(e) => {
                this.setState({
                  entry: {
                    ...this.state.entry,
                    longitude: e.target.value
                  }
                })
              }} 
            hidden/>
          <button type="submit">Submit Find</button>
        </form>
        <BeerEntry />
      </div>
    );
  }
}

export default App;
