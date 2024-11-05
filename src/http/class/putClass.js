const express = require("express")
const router = express.Router()

const {putClass} = require("../../use-cases/class/putClass.js")

router.put("/:id",async (req, res)=>{
    let data = req.body
    let id = req.params.id
    let response = await putClass(data, id)
    
    res.send(response)
})

module.exports = router