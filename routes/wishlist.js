const express = require('express')
const router = express.Router()

const { getWishlist , createWishlist , getUserWishlist , updateWishlistItem , removeWishlistItem} = 
require('../controllers/wishlistController')

router.get('/' , getWishlist)

router.post('/' , createWishlist)

router.get('/:userID' , getUserWishlist)

router.put('/:userID' , updateWishlistItem)

router.delete('/:userID' , removeWishlistItem)

module.exports = router