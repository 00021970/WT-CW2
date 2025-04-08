const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:listName', (req, res, next)=>{
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

        let listname = req.params.listName;
        let requiredlist = lists.find(list=>list.listname === listname);
        if(!requiredlist){
            return res.status(404).send('List not found');
        }
        console.log(requiredlist)
        res.render('list', {listname: requiredlist.listname, items: requiredlist.items});
    });
});

module.exports = router;