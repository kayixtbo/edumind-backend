const express = require("express")
const router = express.Router()

const {getClasses} = require("../../use-cases/class/getClasses.js")

router.get("/",async (req, res)=>{
    let {id_school} = req.query
    let response = await getClasses(id_school)
    
    res.send(response)
})

module.exports = router