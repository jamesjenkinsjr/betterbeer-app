import React, { Component } from "react";
import BeerEntry from "./BeerEntry";
import { pushNewBeer } from "../services/betterbeer-api";
import { getSearchResults, getLocation } from "../services/google-maps";

class BeerSubmission extends Component {
  constructor() {
    super();
    this.state = {
      entry: {
        name: '',
        price: '',
        purchaseType: '',
        location: '',
        placeID: ''
      },
      search: "",
      results: []
    };
  }
  componentWillMount() {
    this.setState({
      entry: this.state.entry
    });
  }

  handleNewBeerSubmit(e) {
    e.preventDefault();
    const entry = this.state.entry;
    pushNewBeer(entry).then(response => {
      console.log(response);
    });
  }

  handleGoogleSearch(e) {
    e.preventDefault();
    const search = e.target.value;
    getSearchResults(search).then(predictions => {
      this.setState({
        search: search,
        results: predictions
      });
    });
  }

  handleSetLocation(result) {
    this.setState({
      entry: {
        ...this.state.entry,
      location: result.description,
      placeID: result.place_id
      },
      search: '',
      results: []
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleNewBeerSubmit(e)}>
          <h3>Spotted a better deal? Submit it here:</h3>
          <input
            type="text"
            name="name"
            placeholder="Name of beer"
            value={this.state.entry.name}
            onChange={e => {
              this.setState({
                entry: {
                  ...this.state.entry,
                  name: e.target.value
                }
              });
            }}
            required
          />
          <br />
          <label>
            $
            <input
              type="number"
              step="0.01"
              name="price"
              placeholder="4.00"
              value={this.state.entry.price}
              onChange={e => {
                this.setState({
                  entry: {
                    ...this.state.entry,
                    price: +e.target.value
                  }
                });
              }}
              required
            />
          </label>
          <br />
          <input type="disabled" value={this.state.entry.location} placeholder='Searching...'/>
          <br/>
          <label>
            Find Location
            <input
              placeholder="Ex. Cigar City, Gator Beverage, etc."
              onChange={e => this.handleGoogleSearch(e)}
            />
          </label>
          {this.state.search
            ?
                this.state.results.map(result => {
                  console.log(result);
                return( 
                  <ul key={result.id}>
                    <li><button onClick={() => this.handleSetLocation(result)}>{result.description}</button></li>
                  </ul>
                
                );
                })
              
            : "Locations will appear here"}
          <br />
          <select
            name="purchaseType"
            value={this.state.entry.purchaseType}
            required
          >
            <option value="" selected disabled hidden>
              Choose type of purchase...
            </option>
            <option value="bottle">Single Bottle</option>
            <option value="draft">Draft Pour</option>
            <option value="can">Single Can</option>
            <option value="6pk">6-Pack</option>
            <option value="12pk">12-Pack</option>
            <option value="24pk">24-Pack</option>
          </select>
          <br />
          <input
            type="float"
            name="latitude"
            value={this.state.entry.latitude}
            onChange={e => {
              this.setState({
                entry: {
                  ...this.state.entry,
                  latitude: e.target.value
                }
              });
            }}
            hidden
          />
          <input
            type="float"
            name="longitude"
            value={this.state.entry.longitude}
            onChange={e => {
              this.setState({
                entry: {
                  ...this.state.entry,
                  longitude: e.target.value
                }
              });
            }}
            hidden
          />
          <button type="submit">Submit Find</button>
        </form>
      </div>
    );
  }
}

export default BeerSubmission;
