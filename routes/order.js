const express = require('express')
const router = express.Router()

const {getUserCart , createCart , getCart} = require('../controllers/cartController')

router.get('/' , getCart)

router.post('/' , createCart)

router.get('/:userID' , getUserCart)

module.exports = router