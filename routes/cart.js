const express = require('express')

const router = express.Router()

const { getCart , getUserCart , createCart , deleteCartItem ,updateCartItem} = require('../controllers/cartController')

router.get('/' , getCart)

router.post('/' , createCart) 

router.get('/:userID' , getUserCart)

router.delete('/:userID' , deleteCartItem)

router.put('/:userID' , updateCartItem)



module.exports = router