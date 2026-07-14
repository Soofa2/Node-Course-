const express = require('express'); 
const path = require('path'); 
const app = express(); 
const rootDir = require('./util/path');
const indexRoutes = require('./routes/index'); 
const usersRoutes = require('./routes/users'); 


app.use(express.static(path.join(__dirname, 'public'))); 

app.use(usersRoutes); 
app.use(indexRoutes); 


app.listen(3000); 