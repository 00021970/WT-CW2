const express = require('express');
const router = express.Router();
const fs = require('fs');
const {validationResult} = require('express-validator');
const {validationRules} = require('../validators/create');

router.get('/', (req, res)=>{
    res.render('create');
});

router.post('/', validationRules(), (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    };

    let listname = req.body.listname;
    let item = req.body.item;

    let newList = {
        listname,
        item
    };

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

        lists.push(newList);

        fs.writeFile('lists.json', JSON.stringify(lists, null, 2), 'utf-8', (writeErr)=>{
            if(writeErr) return next(writeErr);
            res.redirect('create')
        });
    });
});

module.exports = router;