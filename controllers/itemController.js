const Items = require('../models/Items');

exports.check = async (req ,res) => {
    try{
        let { name , description , price , offer , stock , url  ,category , company , subCategory} = req.body
        console.log(name)
        const result = await Items.create({
            name : name , 
            description : description , 
            price : price , 
            offer : offer ,
            stock : stock , 
            url : url , 
            category : category ,
            company : company ,
            subCategory : subCategory
        })
        console.log(result)
    } catch {
        console.log('ERROR OCCURED IN ITEM')
    }
}

exports.getItem = async (req ,res) => {
    try {
        const getItem = await Items.find({});
        res.status(201).json(getItem);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}

exports.updateItem = async (req ,res) => {
    try {
        const {  name , price , description , stock , offer , url , category } = req.body
        const updateItem = await Items.findByIdAndUpdate( name , {
            name : name , 
            price : price , 
            desctiption : description , 
            stock : stock , 
            offer : offer , 
            url  : url , 
            category : category         
        })
        res.status(201).json(updateItem);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}

exports.deleteItem = async (req ,res) => {
    try {
        const {  name } = req.body
        console.log(name)
        const deleteItem = await Items.findOneAndDelete({name : name})
        res.status(201).json(deleteItem);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}

exports.getItemsById = async (req ,res) => {
    try {
        const ID = req.params.id
        const findItem = await Items.findOne({ _id : ID })
        res.status(201).json(findItem);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}