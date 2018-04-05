import React, { Component } from "react";
import BeerEntry from './BeerEntry';
import { getAllBeerFeed } from "../services/betterbeer-api.js";

class BeerFeed extends Component {
  constructor(){
    super();
    this.state = {
      feed: []
    }
  }

  componentDidMount() {
    this.handleGetFeed();
  }
  handleGetFeed(e) {
    getAllBeerFeed().then(response => {
      const feed = response.data.submissions;
      const sortedFeed = feed.sort((a,b) => {
        return new Date(b.createTimestamp) - new Date(a.createTimestamp);
      })
      this.setState({
        feed: sortedFeed
      });
    });
  }

  render() {
    return (
      <div>
        <h3>Beer Feed:</h3>
        
        {this.state.feed.map(entry => {return (<BeerEntry key={entry._id} {...entry} /> );})} 
      </div>
    );
  }
}

export default BeerFeed;
