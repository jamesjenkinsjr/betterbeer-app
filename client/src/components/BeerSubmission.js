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
    if (!this.state.entry.location) {
      alert('You must select a location!')
      return;
    } 
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
      <div className="section">
        <div className="container">
        <div className="columns">
        <div className="column is-10 is-offset-1">
      <div id="form-wrap">

        <form id="beer-submit" onSubmit={e => this.handleNewBeerSubmit(e)}>
          <h3 className="title">Spotted a better deal?</h3>
          <div className="field">
          <label className="label">
          Beer Name
            <div className="control">
              <input
                className="input"
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

          <div className="field">
            <label className="label">
              Price
              <div className="control">
                <input
                  className="input"
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

          <div className="field">
            <div className="control">
              <input
                className="input"
                type="hidden"
                value={this.state.entry.location}
                placeholder="Searching..."
              />
            </div>
          </div>

          <div className="field">
            <label className="label">
              Where'd you find it?
              <div className="control">
                <input
                  id="search"
                  required
                  className="input"
                  placeholder="Ex. Cigar City, Gator Beverage, etc."
                  onChange={e => this.handleGoogleSearch(e)}
                />
              </div>
            </label>
            {!this.state.search
            ? <p className="help">Begin typing above to find a location</p>
            : ''
            }
          </div>
          {this.state.search ? (
            
            <div className="buttons">
              {this.state.results.map(result => {
                return (
                  <button
                    key={result.id}
                    className="button is-primary is-outlined"
                    style={{ whiteSpace: 'pre-wrap', height: '100%'}}
                    onClick={() => this.handleSetLocation(result)}
                  >
                    {result.description}
                  </button>
                );
              })}
              </div> 
                          
          ) : (
            ''
          )}

          <div className="field">
            <label className="label">
              Purchase Type?
              <div className="control">
                <div className="select">
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

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" type="submit">
                Submit Find
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
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
