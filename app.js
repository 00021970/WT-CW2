const express = require('express');
const app = express();
const path = require('path')

const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({
    extended: true
}));

const indexRoute = require('./routes/index');
const createRoute = require('./routes/create');
const listRoute = require('./routes/list');
const allLists = require('./routes/all-lists')

app.use('/', indexRoute);
app.use('/create', createRoute);
app.use('/all-lists', allLists)
app.use('/:list', listRoute);

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`);
});