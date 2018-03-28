const express = require('express');
const axios = require('axios');

require('dotenv').config();

const serverApp = express();
const port = process.env.PORT || 6000;

serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});