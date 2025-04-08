const express = require('express');
const router = express.Router();
const {validationRules} = require('../validators/create');
const Controller = require('../controllers/lists');

router.get('/', (req, res)=>{
    res.render('create');
});

router.post('/', validationRules(), Controller.create);

module.exports = router;