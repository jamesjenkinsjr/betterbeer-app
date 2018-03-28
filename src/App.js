import React, { Component } from 'react';
import './App.css';
import BeerEntry from './components/BeerEntry';

class App extends Component {
  render() {
    return (
      <div>
        <h1>BetterBeer</h1>
        <h2>Get the best prices from the locals you trust!</h2>
        <BeerEntry />
      </div>
    );
  }
}

export default App;
