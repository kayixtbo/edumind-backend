const express = require("express")
const router = express.Router()

const {putSchool} = require("../../use-cases/school/putSchool.js")

router.put("/:id",async (req, res)=>{

    try {
        let data = await req.body
        let id = req.params.id
        let response = await putSchool(data, id)
        
        res.send(response)
        
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router