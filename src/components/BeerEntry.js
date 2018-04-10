import React from "react"; //util to make everything title case ex. big nose > Big Nose
import { prettyDate, uppercase } from "../utilities";

const BeerEntry = props => {
  return (  
    <div key={props._id} class="tile is-parent">
        <article class="tile is-child notification is-primary box">
          <p class="title">{uppercase(props.name)}</p>
          <p class="subtitle">${props.price}</p>
            <p><strong>Where at:</strong> {props.location}</p>
        </article>
      </div>
        
    // <div class="box">
    // <div key={props._id} class="card">
    //   <div class="card-header">
    //     <div className="card-header-title is-centered">
    //       <h3>{uppercase(props.name)}</h3>
    //     </div>
    //   </div>
    //   <div class="card-content">
    //     <div class="content">
    //       <ul>
    //         <li>${props.price}</li>
    //         <li><strong>Where at:</strong> {props.location}</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div class="card-footer">
    //     <p class="card-footer-item">
    //       Spotted on: {prettyDate(props.createTimestamp)}
    //     </p>
    //   </div>
    // </div>
    // </div>

    // <div key={props._id} class='content'>
    //   <h3>{uppercase(props.name)}</h3>
    //   <ul>
    //     <li>Price: {props.price}</li>
    //     <li>Spotted on: {prettyDate(props.createTimestamp)}</li>
    //     <li>Toasts: {props.karmaCount}</li>
    //     <li>Where at: {props.location}</li>
    //   </ul>
    // </div>
  );
};

export default BeerEntry;
