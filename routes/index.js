const express = require('express');
const router = express.Router();
const Controller = require('../controllers/lists');

router.get('/', Controller.getAll);

module.exports = router;