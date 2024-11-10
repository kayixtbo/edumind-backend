const express = require("express")
const router = express.Router()

const createClass = require('./createClass')
const getClasses = require('./getClasses')
const fetchClass = require('./fetchClass')
const deleteClass = require('./deleteClass')
const putClass = require('./putClass')

router.use('/class', createClass)
router.use('/class', getClasses)
router.use('/class', fetchClass)
router.use('/class', deleteClass)
router.use('/class', putClass)

module.exports = router