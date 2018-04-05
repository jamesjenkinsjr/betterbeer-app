import React, { Component } from "react";
import BeerEntry from './BeerEntry';
import { getFilteredBeerFeed } from '../services/betterbeer-api.js';

class BeerSearch extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      searchResults: []
    }
  }

  handleFilteredFeed(beerSearch) {
    this.setState({
        search: beerSearch
    });
    getFilteredBeerFeed(beerSearch)
        .then(response => {
            const filteredFeed = response.data.submissions;
            this.setState({
                searchResults: filteredFeed
            })
        });
  }
  render() {
    return (
      <div>
          <h3>Search for a beer:</h3>
          <input
            id="beer"
            type="text"
            name="beer"
            placeholder="ex. 'Wakulla', 'Big Nose'"
            onChange={(e) => this.handleFilteredFeed(e.target.value)}
          />
          {
            this.state !== null
            ?  this.state.searchResults.map(entry => {return(<BeerEntry {...entry}/>)})
            : ''
          }
      </div>
    );
  }
}

export default BeerSearch;