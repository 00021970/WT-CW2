const express = require('express');
const router = express.Router();
const Controller = require('../controllers/lists');

router.get('/:listName', Controller.getUpdate);

router.post('/:listName', Controller.update);

module.exports = router;