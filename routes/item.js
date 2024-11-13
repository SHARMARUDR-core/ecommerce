const express = require('express')
const {  getItem , updateItem , deleteItem , check , getItemsById} = require('../controllers/itemController')

const router = express.Router()

router.get('/' , getItem )

router.get('/:id' , getItemsById )

router.post('/check' , check)

router.delete('/' , deleteItem)

router.put('/' , updateItem)

module.exports = router