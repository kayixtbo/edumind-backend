const express = require("express")
const router = express.Router()

const {putResponsible} = require("../../use-cases/responsible/putResponsible.js")

router.put("/:id",async (req, res)=>{
    let data = req.body
    let id = req.params.id
    let response = await putResponsible(data, id)
    
    res.send(response)
})

module.exports = router