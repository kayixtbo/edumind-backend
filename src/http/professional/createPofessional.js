const express = require("express")
const router = express.Router()

const {createProfessional} = require("../../use-cases/professional/createProfessional")

router.post("/create",async (req, res)=>{
    try {
        let {name, birth, registration, address, occupation} = await req.body
    
        let newBirth = new Date(birth)
        let response = await createProfessional(name, registration,newBirth,address,occupation)
        res.json(response)
    } catch (error) {
        res.json({error: `${error.message}`})
    }

})

module.exports = router