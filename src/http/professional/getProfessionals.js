const express = require("express")
const router = express.Router()

const {getProfessionals} = require("../../use-cases/professional/getProfessionals")
router.get("/",async (req, res)=>{

    try {
        let response = await getProfessionals()
        
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router