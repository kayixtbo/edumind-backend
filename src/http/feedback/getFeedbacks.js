const express = require("express")
const router = express.Router()

const {getFeedbacks} = require("../../use-cases/feedback/getFeedbacks.js")

router.get("/",async (req, res)=>{

    try {
        let {id_student} = req.query
    
        let response = await getFeedbacks(id_student)
        
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router