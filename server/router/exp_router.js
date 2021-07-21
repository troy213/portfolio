const express = require('express')
const router = express.Router()

const { expGet, expGetId } = require('../controller/controller')

router.get('/', expGet)
router.get('/:id', expGetId)

module.exports = router
