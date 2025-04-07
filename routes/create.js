const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('create');
});

router.post('/', (req, res)=>{
    let listname = req.body.listname;
    let item = req.body.item;
    console.log(listname, item);
    res.redirect('/create');
});

module.exports = router;