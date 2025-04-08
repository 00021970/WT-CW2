const express = require('express');
const router = express.Router();
const Controller = require('../controllers/lists');

router.get('/:listName', Controller.getByName);

module.exports = router;