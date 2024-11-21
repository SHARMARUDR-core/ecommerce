const Users = require('../models/users');

exports.createUser = async (req, res) => {
    try{
        const { name , email , password } = req.body
        console.log(name)
        const newUser = await Users.create({
            name : name , 
            email : email ,
            password : password
        })
        console.log(newUser)
        res.status(201).json(newUser)
    }catch{
        res.status(500)
    } 
};


exports.getUser = async (req ,res) => {
    try {
        const getUser = await Users.find({});
        res.status(201).json(getUser);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}


exports.updateUser = async (req ,res) => {
    try {
        const { name , email , password } = req.body()
        const updatedUser = await Users.findByIdAndUpdate( req.params._id , {
            name : name , 
            email : email ,
            password : password , 
        })
        res.status(201).json(updatedUser);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}