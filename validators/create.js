const { body } = require('express-validator');

const validationRules = () => {
    return [
        body('listname')
            .notEmpty().trim().withMessage('Name must not be empty'),
        body('items')
            .notEmpty().withMessage('Please add an item')
    ];
};

module.exports = {validationRules};