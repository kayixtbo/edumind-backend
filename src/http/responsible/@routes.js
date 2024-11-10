const express = require("express")
const router = express.Router()

const createResponsible = require('./createResponsible')
const getResponsibles = require('./getResponsibles')
const fetchResponsible = require('./fetchResponsible')
const deleteResponsible = require('./deleteResponsible')
const putResponsible = require('./putResponsible')

router.use('/responsible', createResponsible)
router.use('/responsible', getResponsibles)
router.use('/responsible', fetchResponsible)
router.use('/responsible', deleteResponsible)
router.use('/responsible', putResponsible)

module.exports = router