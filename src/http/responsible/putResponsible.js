const express = require("express")
const router = express.Router()

const {putResponsible} = require("../../use-cases/responsible/putResponsible.js")

router.put("/:id",async (req, res)=>{
    let {name, birth} = req.body

    if(birth){
        var birthForm = new Date(birth)
    }

    let id = req.params.id
    let response = await putResponsible({name: name, birth: birthForm}, id)
    
    res.send(response)
})

module.exports = router