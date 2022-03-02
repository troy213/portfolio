const express = require('express')
const router = express.Router()

const { dataGet } = require('../controller/controller')
const grabData = require('../middleware/data')

router.get('/', grabData, dataGet)

module.exports = router
