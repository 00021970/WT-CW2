const express = require('express');
const app = express();
const path = require('path')

const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'public/views'));

app.use(express.urlencoded({
    extended: true
}));

//Homepage
app.get('/', (req, res)=>{
    res.render('index');
});

//Create a list
app.get('/create', (req, res)=>{
    res.render('create');
});

app.post('/create', (req, res)=>{
    let listname = req.body.listname;
    let item = req.body.item;
    console.log(listname, item);
    res.redirect('/create');
});

//Specific to do list
app.get('/:list', (req, res)=>{
    res.render('list', {
        listname: 'Today',
        items: ['Buy groceries', 'Clean the house', 'Walk the dog']
    });
});

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`);
});