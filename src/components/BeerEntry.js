import React from 'react';
import titleCase from 'title-case'; //util to make everything title case ex. big nose > Big Nose
import { prettyDate } from '../utilities';

const BeerEntry = (props) => {

        return (
            <div key={props._id}>
              <h3>{titleCase(props.name)}</h3>
              <ul>
                <li>Price: {props.price}</li>
                <li>Spotted on: {prettyDate(props.createTimestamp)}</li>
                <li>Toasts: {props.karmaCount}</li>
                <li>Where at: {props.latitude}, {props.longitude}</li>
              </ul>
            </div>
        );
    }

export default BeerEntry;