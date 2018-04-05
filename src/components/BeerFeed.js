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
      this.setState({
        feed: feed
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