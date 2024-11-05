const express = require("express")
const router = express.Router()

const {putProfessional} = require("../../use-cases/professional//putPofessional")

router.put("/:id",async (req, res)=>{
    let {address,registration,occupation,name, birth} = req.body

    if(birth){
        var birthForm = new Date(birth)
    }

    let id = req.params.id
    let response = await putProfessional(
        {name: name,
        birth: birthForm,
        address: address,
        registration: registration,
        occupation:occupation}, id)
    
    res.send(response)
})

module.exports = router