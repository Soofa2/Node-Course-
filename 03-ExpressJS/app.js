const express = require('express')

const app = express();

// app.use() registers a middleware function in Express.

app.use('/', (req, res, next) => {
    console.log("This is always run");
    next();
})

app.use('/add-product',(req, res, next) => {
    console.log("In another middleware!"); 
    res.send('<h1>Add Product page</h1>');
});


app.use('/h',(req, res, next) => {
    console.log("In another middleware!"); 
    res.send('<h1>Hello from Express!</h1>');
});


// creating the server and listening at the same time
app.listen(3000);