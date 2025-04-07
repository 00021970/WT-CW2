const express = require('express');
const app = express();
const path = require('path')

const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

//Homepage
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

//Create a list
app.get('/create', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/html/create.html'));
});

app.post('/create', (req, res)=>{
    let listname = req.body.listname;
    let item = req.body.item;
    console.log(listname, item);
    res.redirect('/create')
});

//Specific to do list
app.get('/:list', (req, res)=>{
    let listname = req.params.list;
    console.log(listname);
    res.sendFile(path.join(__dirname, 'public/html/list.html'));
});

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`);
});