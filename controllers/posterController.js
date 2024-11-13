const Posters = require('../models/poster');

exports.createPoster = async (req ,res) => {
    try{
        let { name , description , price , offer , stock , url  ,category , company , companyLogo} = req.body
        console.log(name)
        const result = await Posters.create({
            name : name , 
            description : description , 
            price : price , 
            offer : offer ,
            stock : stock , 
            url : url , 
            category : category ,
            company : company ,
            companyLogo : companyLogo
        })
        console.log(result)
    } catch {
        console.log('ERROR OCCURED IN Poster')
    }
}

exports.getPoster = async (req ,res) => {
    try {
        const getPoster = await Posters.find({});
        res.status(201).json(getPoster);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}

exports.updatePoster = async (req ,res) => {
    try {
        const {  name , price , description , stock , offer , url , category } = req.body
        const updatePoster = await Poster.findByIdAndUpdate( name , {
            name : name , 
            price : price , 
            desctiption : description , 
            stock : stock , 
            offer : offer , 
            url  : url , 
            category : category  ,
            companyLogo : companyLogo        
        })
        res.status(201).json(updatePoster);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}

exports.deletePoster = async (req ,res) => {
    try {
        const {  name } = req.body
        console.log(name)
        const deletePoster = await Poster.findOneAndDelete({name : name})
        res.status(201).json(deletePoster);
    } catch {
        res.status(500).json({ message : 'Server error' })
    }
}