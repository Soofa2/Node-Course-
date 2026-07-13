const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const rootDir = require('./util/path');
const adminRouters = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded())

// app.use() registers a middleware function in Express.
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRouters);
app.use(shopRoutes); 

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,'views', '404.html'));
})

// creating the server and listening at the same time
app.listen(3000);