const express = require("express")
const router = express.Router()

const {getResponsibles} = require("../../use-cases/responsible/getResponsibles")

router.get("/",async (req, res)=>{

    try {
        let response = await getResponsibles()
        
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router