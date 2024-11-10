const express = require("express")
const router = express.Router()

const createProfessional = require('./createPofessional')
const getProfessionals = require('./getProfessionals')
const fetchProfessional = require('./fetchProfessional')
const deleteProfessional = require('./deleteProfessional')
const putProfessional = require('./putProfessional')

router.use('/professional', createProfessional)
router.use('/professional', getProfessionals)
router.use('/professional', fetchProfessional)
router.use('/professional', deleteProfessional)
router.use('/professional', putProfessional)

module.exports = router