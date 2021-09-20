const {User} = require('../models');
const {todos} = require('../models');


module.exports ={
    get:async(req, res) =>{
        // const allUrlLink = await models.url.findAll();
        const modelsThing = await User.findAll();
        console.log(User)

        if(!modelsThing) res.status(404).send('that is not url');
        res.status(200).json("plz don't make error");
    },

    post: async(req, res) =>{
        const todo = req.body.todo;
        // Todo api 
        const userTodo = req.body.user_todo;
        
        if(!todo) {
            res.status(404).send("you've got a Wrong");
        } 
        else {
            res.status(200).json('Welcome!');
        }
        // const userTodo = req.body.user_todo;

        // todo를 테이블에 넣어준다.
        
        //id는 로그인 단계에서 받아야 한다. 


        // res 하기 전에 todo 테이블에서user id로 조회를 한다. 
        // 그 id의 todo를 전부 모아서 보내준다. 
    }
}
    
