const express = require("express")
const router = express.Router()

const {createResponsible} = require("../../use-cases/responsible/createResponsible")

router.post("/create",async (req, res)=>{
    let {name, id_school, birth} = await req.body

    let newBirth = new Date(birth)
    let response = await createResponsible(name, id_school, newBirth)

    res.send(response)
})

module.exports = router