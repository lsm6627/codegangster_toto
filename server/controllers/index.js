const models = require('../models');
const Users = models.Users


module.exports ={
    get:async(req, res) =>{
        const allUrlLink = await models.url.findAll();
        res.status(200).json(allUrlLink)
    },

    post: async(req, res) =>{
        
    }


}
    