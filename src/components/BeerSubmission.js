import React, { Component } from 'react';
import BeerEntry from './BeerEntry';
import { pushNewBeer } from '../services/betterbeer-api';
import { getSearchResults, getLocation } from '../services/google-maps';

class BeerSubmission extends Component {
  constructor(){
    super();
    this.state = {
      entry: {
        name: '',
        price: '',
        purchaseType: '',
        latitude: 12.3456,
        longitude: -65.4321,
      }
    }
  }
    componentWillMount() {
        this.setState({
            entry: this.state.entry
        })
    }
    
    handleNewBeerSubmit(e) {
        e.preventDefault();
        const entry = this.state.entry;
        pushNewBeer(entry) 
        .then(response => {      
            console.log(response)
        })
    }
    render() {
        return (
            <div>
        <form onSubmit={(e) => this.handleNewBeerSubmit(e)}>
          <h3>Spotted a better deal? Submit it here:</h3>
          {console.log('Search results: ' + getSearchResults('Swamp', 29.614778, -82.376858))}
          {console.log('Zip to lat and long ' + getLocation(32601))}
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
              type="number"
              step="0.01" 
              name="price" 
              placeholder="4.00" 
              value={this.state.entry.price} 
              onChange={(e) => {
                this.setState({
                  entry: {
                    ...this.state.entry,
                    price: +e.target.value
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
        </div>
        );
    }
}

export default BeerSubmission;