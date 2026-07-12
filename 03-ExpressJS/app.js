const express = require('express')
const bodyParser = require('body-parser');

const app = express();

const adminRouters = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded())

// app.use() registers a middleware function in Express.

app.use(adminRouters);
app.use(shopRoutes); 

// creating the server and listening at the same time
app.listen(3000);