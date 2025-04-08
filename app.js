const express = require('express');
const app = express();
const path = require('path')

const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const indexRoute = require('./routes/index');
const createRoute = require('./routes/create');
const listRoute = require('./routes/list');
const updateRoute = require('./routes/update');
const deleteRoute = require('./routes/delete');

app.use('/', indexRoute);
app.use('/create', createRoute);
app.use('/list', listRoute);
app.use('/update', updateRoute);
app.use('/delete', deleteRoute);

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`);
});