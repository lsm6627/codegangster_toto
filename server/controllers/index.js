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
        // const userTodo = req.body.user_todo;

        // todo를 테이블에 넣어준다.
        
        //id는 로그인 단계에서 받아야 한다. 


        // res 하기 전에 todo 테이블에서user id로 조회를 한다. 
        // 그 id의 todo를 전부 모아서 보내준다. 
    }
}
