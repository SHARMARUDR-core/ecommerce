const express = require('express')

const { getUser , createUser , updateUser } = require('../controllers/userController')

const router = express.Router()

router.get('/' , getUser )

router.post('/' , createUser)

router.post('/' , updateUser)

module.exports = router