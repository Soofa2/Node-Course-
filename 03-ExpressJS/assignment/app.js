const express = require('express'); 

const app = express(); 

/*
app.use((req, res, next) => {
    console.log("This is the first res"); 
    next();
})

app.use((req, res, next) => {
    console.log("This is the seconed res"); 
   
})
*/

app.use('/users',(req, res, next) => {
    res.send('<h1>Hello users</h1>');
})

app.use('/',(req, res, next) => {
    
    res.send('<h1>Hello ppl</h1>');
})


app.listen(3000);
