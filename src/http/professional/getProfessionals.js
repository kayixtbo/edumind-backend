const express = require("express")
const router = express.Router()

const {getProfessionals} = require("../../use-cases/professional/getProfessionals")
router.get("/",async (req, res)=>{
    let response = await getProfessionals()
    
    res.send(response)
})

module.exports = router