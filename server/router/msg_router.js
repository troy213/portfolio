const express = require('express')
const router = express.Router()

const { msgGet, msgPost } = require('../controller/controller')

router.get('/', msgGet)
router.post('/', msgPost)

module.exports = router
