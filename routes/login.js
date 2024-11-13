const express = require('express')
const { createUserLogin , getUserLogin , deleteUserLogin } = require('../controllers/userLoginControllers')

const router = express.Router()

router.get('/' , getUserLogin )

router.post('/' , createUserLogin)

router.delete('/' , deleteUserLogin)

module.exports = router