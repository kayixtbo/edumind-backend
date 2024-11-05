const express = require("express")
const router = express.Router()

const {putFeedback} = require("../../use-cases/feedback/putFeedback")

router.put("/:id",async (req, res)=>{
    let {id_student, id_professional, text} = req.body

    let id = req.params.id
    let response = await putFeedback(
        {text: text,
        id_student: id_student,
        id_professional: id_professional}, id)
    
    res.send(response)
})

module.exports = router