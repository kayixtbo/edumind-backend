const express = require("express")
const router = express.Router()

const {createFeedback} = require("../../use-cases/feedback/createFeedback")

router.post("/create",async (req, res)=>{
    try {
        let {id_student, id_professional, text} = await req.body
    
        let response = await createFeedback(id_student, id_professional, text)
    
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router