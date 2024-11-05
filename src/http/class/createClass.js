const express = require("express")
const router = express.Router()
const {createClass} = require("../../use-cases/class/createClass")

router.post("/create",async (req, res)=>{
    let {name, id_school} = await req.body    
    let response = await createClass(name, id_school)
    
    res.send(response)
})

module.exports = router