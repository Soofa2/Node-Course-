const http = require('http');
const routes = require('./routes');

// Callback function => executed when the request happens
const server = http.createServer(routes.handler);

// Listening for incoming requests
server.listen(3000);