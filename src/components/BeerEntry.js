import React from 'react'; //util to make everything title case ex. big nose > Big Nose
import { prettyDate, uppercase } from '../utilities';

const BeerEntry = (props) => {

        return (
            <div key={props._id}>
              <h3>{uppercase(props.name)}</h3>
              <ul>
                <li>Price: {props.price}</li>
                <li>Spotted on: {prettyDate(props.createTimestamp)}</li>
                <li>Toasts: {props.karmaCount}</li>
                <li>Where at: {props.location}</li>
              </ul>
            </div>
        );
    }

export default BeerEntry;