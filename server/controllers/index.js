const {User} = require('../models');


module.exports ={
    get:async(req, res) =>{
        // const allUrlLink = await models.url.findAll();
        const modelsThing = await User.findAll();
        console.log(User)

        if(!modelsThing) res.status(404).send('that is not url');
        res.status(200).json('plz dont make error');
    },

    post: async(req, res) =>{
        
    }


}
    