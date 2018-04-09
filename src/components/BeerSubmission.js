import React, { Component } from "react";
import BeerEntry from "./BeerEntry";
import { pushNewBeer } from "../services/betterbeer-api";
import { getSearchResults, getLocation } from "../services/google-maps";

class BeerSubmission extends Component {
  constructor() {
    super();
    this.state = {
      entry: {
        name: "",
        price: "",
        purchaseType: "",
        location: "",
        placeID: ""
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
      search: "",
      results: []
    });
  }
  handlePurchaseType(e) {
    this.setState({
      entry: {
        ...this.state.entry,
        purchaseType: e.target.value
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleNewBeerSubmit(e)}>
          <h3>Spotted a better deal? Submit it here:</h3>
          <div class="field">
            <div class="control">
              <input
                class="input"
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
            </div>
          </div>

          <div class="field">
            <label class="label">
              Price
              <div class="control">
                <input
                  class="input"
                  type="number"
                  step="0.01"
                  name="price"
                  placeholder="$4.00"
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
              </div>
            </label>
          </div>

          <div class="field">
            <div class="control">
              <input
                class="input"
                type="disabled"
                value={this.state.entry.location}
                placeholder="Searching..."
              />
            </div>
          </div>

          <div class="field">
            <label class="label">
              Find Location
              <div class="control">
                <input
                  class="input"
                  placeholder="Ex. Cigar City, Gator Beverage, etc."
                  onChange={e => this.handleGoogleSearch(e)}
                />
              </div>
            </label>
          </div>
          {this.state.search ? (
            <div class="buttons">
              {this.state.results.map(result => {
                return (
                  <button
                    key={result.id}
                    class="button is-secondary"
                    onClick={() => this.handleSetLocation(result)}
                  >
                    {result.description}
                  </button>
                );
              })}
            </div>
          ) : (
            <p class="help">Location results will appear here</p>
          )}

          <div class="field">
            <label class="label">
              Purchase Type?
              <div class="control">
                <div class="select">
                  <select
                    name="purchaseType"
                    onChange={e => this.handlePurchaseType(e)}
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
                </div>
              </div>
            </label>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary" type="submit">
                Submit Find
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BeerSubmission;
