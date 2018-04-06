const express = require('express');
const axios = require('axios');
const path = require('path');

require('dotenv').config();
const { GMAPS_API_KEY, GGEO_API_KEY } = process.env;

const serverApp = express();
const port = process.env.PORT || 5000;

serverApp.get('/geocode/:zip', function(request, response) {
    const {zip} = request.params;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${GGEO_API_KEY}`;
    axios
        .get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            response.status(500).json({
                msg: "No google maps for you"
            });
        });
});

serverApp.get('/autocomplete/:input/:lat,:long', function(request, response){
    const {input, lat, long} = request.params;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=establishment&location=${lat},${long}&radius=500&key=${GMAPS_API_KEY}`;
    axios
        .get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            response.status(500).json({
                msg: 'Google Places API call failed!'
            })
        })
})

serverApp.get('/submissions/', function(request, response){
    const url = 'https://betterbeer-api.herokuapp.com/submissions/';
    axios
        .get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            response.status(500).json({
                msg: 'Database connection has failed.  Please try again.'
            })
        })
})

serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});