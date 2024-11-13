const express = require('express')
const { getCategory , updateCategory , createCategory } = require('../controllers/categoryController')

const router = express.Router()

router.get('/' , getCategory )

router.post('/' , createCategory)

router.delete('/' , updateCategory)

module.exports = router