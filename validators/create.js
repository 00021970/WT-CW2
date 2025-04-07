const { body } = require('express-validator');

const validationRules = () => {
    return [
        body('listname')
            .notEmpty().withMessage('Name must not be empty'),
        body('item')
            .notEmpty().withMessage('Please add an item')
    ];
};

module.exports = {validationRules};