const express = require('express');
require('dotenv').config();
const jwt = require('express-jwt');
const jwksRsa = require('jwsk-rsa');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret
});

const app = express();

app.get("/public", function(req, res) {
    res.json({message:"API 1/0"});
});

app.listen(3001);
console.log("API runs" + process.env.REACT_APP_AUTH0_AUDIENCE);