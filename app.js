const express = require('express');
const app = express();
const path = require('path')

const port = 3000;

//Homepage
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

//Specific to do list
app.get('/:list', (req, res)=>{
    let listname = req.params.list;
    console.log(listname)
    res.sendFile(path.join(__dirname, 'public/html/list.html'))
});

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`);
});