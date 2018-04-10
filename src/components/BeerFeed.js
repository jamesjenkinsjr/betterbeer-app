import React, { Component } from "react";
import BeerEntry from "./BeerEntry";
import { getAllBeerFeed } from "../services/betterbeer-api.js";

class BeerFeed extends Component {
  constructor() {
    super();
    this.state = {
      feed: []
    };
  }

  componentDidMount() {
    this.handleGetFeed();
  }
  handleGetFeed(e) {
    getAllBeerFeed().then(response => {
      const feed = response.data.submissions;
      const sortedFeed = feed.sort((a, b) => {
        return new Date(b.createTimestamp) - new Date(a.createTimestamp);
      });
      this.setState({
        feed: sortedFeed
      });
    });
  }

  render() {
    return (
      <div className="section">
        <div className="container">
        
        <div className="columns is-centered">
        
        <div className="tile is-ancestor is-vertical is-8">
            {this.state.feed.map(entry => {
              return <BeerEntry key={entry._id} {...entry} />;
            })}
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default BeerFeed;
