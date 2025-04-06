const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.send(`<h1>This web application was created to fulfill Web Technology module's requirements and does not represent an actual company or service</h1>`);
});

app.listen(port, ()=>{
    console.log('App running at http://localhost:3000');
});