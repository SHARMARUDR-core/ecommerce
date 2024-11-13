const Categorys = require('../models/category');

exports.createCategory = async (req, res) => {
    try{
        const { name , list } = req.body
        console.log(name)
        const newCategory = await Categorys.create({
            name : name , 
            list : list
        })
        console.log(newCategory)
        res.status(201).json('Your respones is added')
    }catch{
        res.status(500)
    } 
};


exports.getCategory = async (req ,res) => {
    try {
        const getCategory = await Categorys.find({});
        res.status(201).json(getCategory);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}


exports.updateCategory = async (req ,res) => {
    try {
        const { name , list } = req.body()
        const updateCategory = await Categorys.findByIdAndUpdate( req.params._id , {
            name : name , 
            list : list
        })
        res.status(201).json(updateCategory);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}