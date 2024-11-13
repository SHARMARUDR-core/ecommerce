const Logins = require('../models/logins')
const {v4 : uuidv4} = require('uuid')
const { setUser } =  require('../services/auth')
exports.createUserLogin = async (req, res) => {
    try {
        const {email , password} = req.body
        const newUserLogin = await Logins.create({
            email : email , 
            password : password
        });
        res.status(201).json(newUserLogin);       
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getUserLogin = async (req , res) => {
    try {
        const getUser = await Logins.find({});
        res.status(201).json(getUser);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}

exports.deleteUserLogin = async (req ,res) => {
    try {
        const { _id } = req.body
        const getUserDetail = await Logins.deleteOne({ _id : _id})
        res.status(201).json(getUserDetail)
    } catch {
        res.status(500).json({ message : 'Server Error Occured in delete user login' })
    }
}