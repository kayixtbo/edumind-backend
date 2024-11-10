const express = require("express")
const router = express.Router()

const {createResponsible} = require("../../use-cases/responsible/createResponsible")

router.post("/create",async (req, res)=>{

    try {
        let {name, id_school, birth} = await req.body
    
        let newBirth = new Date(birth)
        let response = await createResponsible(name, id_school, newBirth)
    
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router