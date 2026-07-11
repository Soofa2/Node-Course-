const http = require('http');
const routes = require('./routes');

const express = require('express')

const app = express();

// Callback function => executed when the request happens
const server = http.createServer(app);

// Listening for incoming requests
server.listen(3000);