const express = require("express")
const router = express.Router()

const {createResponsible} = require("../../use-cases/responsible/createResponsible")

router.post("/create",async (req, res)=>{
    let {name, id_school, birth} = await req.body    
    let response = await createResponsible(name, id_school, birth)
    res.send(response)
})

module.exports = router