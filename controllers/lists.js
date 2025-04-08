const { validationResult } = require('express-validator');
const Service = require('../services/lists');

const Controller = {
    getAll: (req, res) => {
        try {
            const lists = Service.get(req, res);
            res.render('index', {lists})
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getByName: (req, res) => {
        try {
            const list = Service.getByName(req, res);
            res.render('list', {listname: list.listname, items: list.items})
        }
        catch(error) {
            res.status(500).json({ error: error.message });
        }
    },

    getUpdate: (req, res) => {
        try {
            const list = Service.getByName(req, res);
            if (!list) {
                return res.render('create', { list: { listname: '', items: [] }, formAction: '/create', formTitle: 'Create list' });
            }
            res.render('create', {list: list})
        }
        catch(error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('create', { errors: errors.array(), list: req.body });
        }
        try {
            await Service.create(req, res);
            res.redirect('/');
        }
        catch(error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('create', { errors: errors.array(), list: req.body });
        }
        try {
            const updatedList = Service.update(req, res);
            if (!updatedList) {
                return res.status(404).json({ error: 'List not found' });
            }
            res.redirect('/');
        }
        catch(error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: (req, res) => {
        try {
            const deleted = Service.delete(req, res);
            console.log(deleted)
            if (!deleted) {
                return res.status(404).json({ error: 'List not found' });
            }
            res.redirect('/');
        }
        catch(error) {
            res.status(500).json({ error: error.message });
    }
  }
};

module.exports = Controller;