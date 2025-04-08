const fs = require('fs');
const path = require('path');

if (!global.lists) {
    global.lists = path.join(__dirname, '../data', 'lists.json');
}

const allLists = () => {
    try {
        return JSON.parse(fs.readFileSync(global.lists, 'utf8'));
    }
    catch (error) {
        return [];
    }
};

const Service = {
    get(req, res) {
       return allLists();
    },

    getByName(req, res) {
        const name = req.params.listName;
        const requiredlist = allLists().find(list => list.listname === name);
        return requiredlist;
    },

    create(req, res) {
        const body = req.body;
        const newList = {
            listname: body.listname,
            items: body.items
        };
        
        const lists = allLists();
        console.log(lists)
        lists.push(newList);

        writeToFile(lists);
    
        return {newList};
    },

    update(req, res) {
        const name = req.params.listName;
        const lists = allLists();
        const index = lists.findIndex(list => list.listname === name);
        if (index === -1) {
            return null;
        }

        lists[index] = {
            listname: req.body.listname,
            items: req.body.items
        };
        writeToFile(lists);
        return lists[index];
    },

    delete(req, res) {
        const name = req.params.listname;
        const lists = allLists();
        const index = lists.findIndex(list => list.listname === name);
        if (index === -1) {
            return false;
        }
        lists.splice(index, 1);
        writeToFile(lists);
        return true;
    }
};

let writeToFile = async (lists) => {
    await fs.writeFileSync(
        global.lists,
        JSON.stringify(lists, null, 4),
        'utf8'
    );
};

module.exports = Service;