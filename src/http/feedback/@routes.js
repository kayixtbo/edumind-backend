const express = require("express")
const router = express.Router()

const createFeedback = require('./createFeedback')
const getFeedbackes = require('./getFeedbacks')
const fetchFeedback = require('./fetchFeedback')
const deleteFeedback = require('./deleteFeedback')
const putFeedback = require('./putFeedback')

router.use('/feedback', createFeedback)
router.use('/feedback', getFeedbackes)
router.use('/feedback', fetchFeedback)
router.use('/feedback', deleteFeedback)
router.use('/feedback', putFeedback)

module.exports = router