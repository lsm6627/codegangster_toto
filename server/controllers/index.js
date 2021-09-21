const { User } = require('../models');
const { todos } = require('../models');

module.exports = {
    get: async(req, res) => {
        const result = await todos.findAll().catch((err) => res.json(err));
        if(!result) return res.status(404).json('not found')
        res.status(200).json(result);
    },
    post: async(req, res) => {
        const todo = req.body.todo;
        if(!todo) {
          return res.sendStatus(400);
        }
        const userId = await User.findOnd({where: {userId: 'kimcoding'}}).catch((err) => res.json(err));
        console.log(userId);
        const result = await todos.create({todo: req.body.todo}).catch((err) => res.json(err));
        res.status(200).json(result);
    }
}