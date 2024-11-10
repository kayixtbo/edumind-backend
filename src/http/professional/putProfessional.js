const express = require("express")
const router = express.Router()

const {putProfessional} = require("../../use-cases/professional//putPofessional")

router.put("/:id",async (req, res)=>{

    try {
        let {address,registration,occupation,name, birth} = await req.body
    
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
        
        res.json(response)
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router