const express = require("express")
const router = express.Router()

const {getClasses} = require("../../use-cases/class/getClasses.js")

router.get("/",async (req, res)=>{

    try {
        let {id_school} = req.query
        let response = await getClasses(id_school)
        
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router