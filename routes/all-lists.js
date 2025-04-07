const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next)=>{
    fs.readFile('lists.json', 'utf-8', (err, data)=>{
        let lists = [];
        if(!err){
            try{
                lists = data.trim() === '' ? [] : JSON.parse(data);
            }
            catch(parseErr){
                return next(parseErr);
            }
        }
        res.render('all-lists', {lists});
    });
});

module.exports = router;