const express = require('express')
const { getPoster , createPoster , updatePoster , deletePoster } = require('../controllers/posterController')

const router = express.Router()

router.get('/' , getPoster )

router.post('/' , createPoster)

router.delete('/' , updatePoster)

router.put('/' , deletePoster)

module.exports = router