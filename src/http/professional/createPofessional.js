const express = require("express")
const router = express.Router()

const {createProfessional} = require("../../use-cases/professional/createProfessional")

router.post("/create",async (req, res)=>{
    let {name, birth, registration, address, occupation} = await req.body

    let newBirth = new Date(birth)
    let response = await createProfessional(name, registration,newBirth,address,occupation)

    res.send(response)
})

module.exports = router