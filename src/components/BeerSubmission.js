import React, { Component } from "react";
import BeerEntry from "./BeerEntry";
import FormSuccess from "./FormSuccess";
import { pushNewBeer } from "../services/betterbeer-api";
import { getSearchResults, getLocation } from "../services/google-maps";
import LoadingIcon from '../images/loading.gif';

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
      results: [],
      hasSubmit: null
    };
  }
  componentWillMount() {
    this.setState({
      entry: this.state.entry
    });
  }

  handleNewBeerSubmit(e) {
    e.preventDefault();
    const formWrap = document.getElementById('form-wrap');
    const loader = document.createElement('img');
    loader.src = LoadingIcon;
    loader.setAttribute('style', 'height: 300px; width: 300px');
    formWrap.removeChild(document.getElementById('beer-submit'));
    formWrap.appendChild(loader);
    
    const entry = this.state.entry;
    pushNewBeer(entry).then(response => {
      console.log(response);
      formWrap.removeChild(loader);
      this.setState({
        hasSubmitted: 1
      })
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
    const search = document.getElementById('search');
    search.value = result.description;
    this.setState({
      entry: {
        ...this.state.entry,
        location: result.description,
        placeID: result.place_id
      },
      search: '',
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
    if(this.state.hasSubmitted !== 1) {
    return (
      <div id="form-wrap">
        <form id="beer-submit" onSubmit={e => this.handleNewBeerSubmit(e)}>
          <h3 class="title">Spotted a better deal? Submit it here:</h3>
          <div class="field">
          <label class="label">
          Name of beer
            <div class="control">
              <input
                class="input"
                type="text"
                name="name"
                placeholder="Guiness, Big Nose, etc."
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
            </label>
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
                type="hidden"
                value={this.state.entry.location}
                placeholder="Searching..."
              />
            </div>
          </div>

          <div class="field">
            <label class="label">
              Where'd you find it?
              <div class="control">
                <input
                  id="search"
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
                    class="button is-primary is-outlined"
                    onClick={() => this.handleSetLocation(result)}
                  >
                    {result.description}
                  </button>
                );
              })}
            </div>
          ) : (
            <p class="help">Begin typing above to find a location</p>
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
  } else {
    return (
      <FormSuccess />
    );
  }
  }
}

export default BeerSubmission;
