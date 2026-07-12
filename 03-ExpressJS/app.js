const express = require('express')
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded())

// app.use() registers a middleware function in Express.

app.use('/', (req, res, next) => {
    console.log("This is always run");
    next();
})

app.use('/add-product',(req, res, next) => {
    console.log("In another middleware!"); 
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
});

app.use('/',(req, res, next) => {
    console.log("In another middleware!"); 
    res.send('<h1>Hello from Express!</h1>');
});


// creating the server and listening at the same time
app.listen(3000);