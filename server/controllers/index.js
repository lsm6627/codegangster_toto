const { User } = require('../models');
const { todos } = require('../models');

const { User } = require('../models');
const { todos } = require('../models');

module.exports ={
    get:async(req, res) =>{
        // const allUrlLink = await models.url.findAll();
        const result = await todos.findAll().catch((err)=> res.json(err));
        console.log(User)

        if(!result) return res.status(404).json('not found');
        res.status(200).json(result);
    },

    post: async(req, res) =>{
        // Todo api 
        const todo = req.body.todo;
        if(!todo) {
            return res.status(404).send({message: "you've got a Wrong"});
        } else {
            const result = await todo.create({todo: todo}).catch((err)=> res.json(err))
            if(!result) return res.status(404).json('not found');
            res.status(200).json({message: 'create!', data: result});
        }
        const userInfo = await User.findOne({where: {userId: userId}}).catch((err) => res.json(err));
        const result = await todos.create({todo: todo, userId: userInfo.id}).catch((err) => res.json(err));
        // const fk = await todos.findOne();
        // console.log((await fk.createUser()).toJSON());
        if(!result) return res.status(404).json('not found')
        res.status(200).json({message: 'created', data: result});

    }
}
