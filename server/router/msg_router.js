const express = require('express')
const router = express.Router()

const { msgGet, msgPost } = require('../controller/msg_controller')
const limiter = require('../middleware/limiter')

router.get('/', msgGet)
router.post('/', limiter, msgPost)

module.exports = router
