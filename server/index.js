require("dotenv").config();
const express = require('express');
// const fs = require("fs");
const https = require("https");
const cors = require('cors');
const controller = require('./controllers');

const app = express();

// app.use(
//   morgan(':method :url :status :res[content-length] - :response-time ms')
// );

app.use(cors({origin: ["http://localhost:3000"], 
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"]}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/items', controller);

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

let server = https.createServer(credentials, app);
server.listen(HTTPS_PORT, () => console.log("server running"));


module.exports = server;
