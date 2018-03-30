import React, { Component } from "react";
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
      this.setState({
        feed: feed
      });
    });
  }
  render() {
    return (
      <div>
        <h3>Beer Feed:</h3>

        {this.state.feed.map(entry => {
          return (
            <div>
              <h3>{entry.name}</h3>
              <ul>
                <li>Price: {entry.price}</li>
                <li>Spotted on: {entry.createTimestamp}</li>
                <li>Toast Count: {entry.karmaCount}</li>
                <li>Where at: Panama City</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BeerFeed;
