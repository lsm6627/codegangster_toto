const models = require('../models');
const users = require('users')


module.exports ={
    get:(req,res) => {
        const userId = req.params.userId;
        if(!userId){
            return res.status(401).send('Unauthorize User.');
        } else {
            model.get(Number(userId), (err, result) =>{
                if(err) {
                    res.status(404).send("No orders found ");
                } else {
                    res.status(200).json(result);
                }
            });
        }
    },

//     post:(res.req) => {

//     }
};