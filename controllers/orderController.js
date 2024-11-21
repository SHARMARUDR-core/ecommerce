const Orders = require('../models/order')


exports.createOrder = async (req, res) => {
    try{
        const { user , Items , totalAmonut , quantity } = req.body
        console.log(user)
        const newOrderList = await Orders.create({
            user : user , 
            Items : Items , 
            totalAmonut : totalAmonut , 
            quantity : quantity , 
            status : status , 
            paymentMethod : paymentMethod
        })
        console.log(newOrderList)
        res.status(201).json('YOUR ITEM IS ADDED IN ORDER')
    }catch{
        res.status(500).json('SERVER ERROR -500-')
    } 
};

exports.getOrder = async (req , res) => {
    try{
        const getOrder = await Orders.find({});
        res.status(201).json(getOrder);
    } catch {
        res.status(500).json('SERVER ERROR IN GETTING ORDER ITEMS')
    }
}

exports.getUserOrder  = async (req , res) => {
    try{
        console.log('first')
        let userID = req.params.userID
        console.log(` new uesrID  ${userID}`)
        const getUserOrder = await Orders.findOne({ user : userID });
        console.log(getUserOrder)
        res.status(201).json(getUserOrder);
    } catch {
        res.status(500).json('SERVER ERROR IN GETTING WISHLIST ITEMS')
    }
}