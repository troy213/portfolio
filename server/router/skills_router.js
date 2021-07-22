const express = require('express')
const router = express.Router()

const { skillsGet, skillsGetId } = require('../controller/controller')

router.get('/', skillsGet)
router.get('/:id', skillsGetId)

module.exports = router
