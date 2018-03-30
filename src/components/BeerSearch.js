import React, { Component } from "react";
import { getFilteredBeerFeed } from '../services/betterbeer-api.js';
import titleCase from 'title-case';

class BeerSearch extends Component {
    constructor(){
        super();
        this.state = {
            searchTerm: '',
            searchResults: []
        }
    }

  handleFilteredFeed(beerSearch) {
    
    console.log(beerSearch);
    this.setState({
        searchTerm: beerSearch
    });
    getFilteredBeerFeed(beerSearch)
        .then(response => {
            const filteredFeed = response.data.submissions;
            console.log(filteredFeed);
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
            this.state.searchTerm !== null
            ?  <div>{this.state.searchResults.map(result => {
                return (
                    <div key={result._id}>
                      <h3>{titleCase(result.name)}</h3>
                      <ul>
                        <li>Price: {result.price}</li>
                        <li>Spotted on: {result.createTimestamp}</li>
                        <li>Toast Count: {result.karmaCount}</li>
                        <li>Where at: Panama City</li> 
                      </ul>
                    </div>
           )})}</div> 
            : ''
          }
      </div>
    );
  }
}

export default BeerSearch;