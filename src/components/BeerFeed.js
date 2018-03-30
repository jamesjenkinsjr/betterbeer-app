import React, { Component } from "react";
import { getAllBeerFeed } from "../services/betterbeer-api.js";
import titleCase from 'title-case'; //util to make everything title case ex. big nose > Big Nose

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
      console.log(feed);
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
            <div key={entry._id}>
              <h3>{titleCase(entry.name)}</h3>
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
