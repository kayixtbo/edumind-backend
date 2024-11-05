const express = require("express")
const router = express.Router()

const {putSchool} = require("../../use-cases/school/putSchool.js")

router.put("/:id",async (req, res)=>{
    let data = req.body
    let id = req.params.id
    let response = await putSchool(data, id)
    
    res.send(response)
})

module.exports = router