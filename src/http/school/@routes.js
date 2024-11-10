const express = require("express")
const router = express.Router()

const createSchool = require('./createSchool')
const getSchools = require('./getSchools')
const fetchSchool = require('./fetchSchool')
const deleteSchool = require('./deleteSchool')
const putSchool = require('./putSchool')

router.use('/school', createSchool)
router.use('/school', getSchools)
router.use('/school', fetchSchool)
router.use('/school', deleteSchool)
router.use('/school', putSchool)

module.exports = router