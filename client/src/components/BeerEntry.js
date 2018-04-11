import React from "react"; //util to make everything title case ex. big nose > Big Nose
import { prettyDate, uppercase } from "../utilities";

const BeerEntry = props => {
  return (  
    <div key={props._id} class="tile is-parent">
        <article class="tile is-child notification is-primary box">
          <p class="title">{uppercase(props.name)}</p>
          <p class="subtitle">${props.price}</p>
          <p><strong>Purchase Type:</strong> {uppercase(props.purchaseType)}</p>
            <p><strong>Where at:</strong> {props.location}</p>
            <p><strong>Spotted on:</strong> {prettyDate(props.createTimestamp)}
         </p>
        </article>
      </div>
  );
};

export default BeerEntry;
