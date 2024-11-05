const express = require("express")
const router = express.Router()

const {getResponsibles} = require("../../use-cases/responsible/getResponsibles")

router.get("/",async (req, res)=>{
    let {id_school} = req.query
    let response = await getResponsibles(id_school)
    
    res.send(response)
})

module.exports = router