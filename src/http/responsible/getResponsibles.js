const express = require("express")
const router = express.Router()

const {getResponsibles} = require("../../use-cases/responsible/getResponsibles")

router.get("/",async (req, res)=>{
    let response = await getResponsibles()
    
    res.send(response)
})

module.exports = router