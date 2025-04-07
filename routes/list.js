const express = require('express');
const router = express.Router();

router.get('/:list', (req, res)=>{
    res.render('list', {
        listname: 'Today',
        items: ['Buy groceries', 'Clean the house', 'Walk the dog']
    });
});

module.exports = router;