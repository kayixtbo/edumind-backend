const express = require("express")
const router = express.Router()

const {getFeedbacks} = require("../../use-cases/feedback/getFeedbacks.js")

router.get("/",async (req, res)=>{
    let {id_student} = req.query

    let response = await getFeedbacks(id_student)
    
    res.send(response)
})

module.exports = router