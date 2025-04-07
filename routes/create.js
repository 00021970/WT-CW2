const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res)=>{
    res.render('create');
});

router.post('/', (req, res, next)=>{
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