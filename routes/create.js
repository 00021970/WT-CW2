const express = require('express');
const router = express.Router();
const fs = require('fs');
const {validationResult} = require('express-validator');
const {validationRules} = require('../validators/create');
const path = require('path');

router.get('/', (req, res)=>{
    res.render('create');
});

router.post('/', validationRules(), (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    };

    let listname = req.body.listname;
    let items = req.body.items || [];

    console.log(listname, items)

    fs.readFile('lists.json', 'utf-8', (err, data)=>{
        let lists = [];
        if(!err){
            try{
                lists = data.trim() === '' ? [] : JSON.parse(data);
            }
            catch(parseErr){
                return next(parseErr);
            }
        };

        let newList = {
            listname: listname,
            items: items
        };

        lists.push(newList);

        fs.writeFile('lists.json', JSON.stringify(lists, null, 2), 'utf-8', (writeErr)=>{
            if(writeErr) return next(writeErr);
            res.redirect('create')
        });
    });
});

module.exports = router;