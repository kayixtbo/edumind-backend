const express = require("express")
const router = express.Router()
const {createSchool} = require("../../use-cases/school/createSchool")

router.post("/create",async (req, res)=>{
    let {name, cnpj, address} = await req.body    
    let response = await createSchool(name, cnpj, address)
    res.send(response)
})

module.exports = router