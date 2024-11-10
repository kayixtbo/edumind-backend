const express = require("express")
const router = express.Router()

const {putClass} = require("../../use-cases/class/putClass.js")

router.put("/:id",async (req, res)=>{
    try {
        let data = await req.body
        let id = req.params.id
        let response = await putClass(data, id)
        
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router