const express = require("express")
const router = express.Router()

const createStudent = require('./createStudent')
const getStudents = require('./getStudents')
const fetchStudent = require('./fetchStudent')
const deleteStudent = require('./deleteStudent')
const putStudent = require('./putStudent')

router.use('/Student', createStudent)
router.use('/Student', getStudents)
router.use('/Student', fetchStudent)
router.use('/Student', deleteStudent)
router.use('/Student', putStudent)

module.exports = router