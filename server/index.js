const express = require('express');
const axios = require('axios');

require('dotenv').config();

const serverApp = express();
const port = process.env.PORT || 6000;

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