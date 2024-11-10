const express = require("express")
const router = express.Router()

const {fetchClass} = require("../../use-cases/class/fetchClass")

router.get("/:id",async (req, res)=>{

    try {
        let id = req.params.id
        let response = await fetchClass(id)
        
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router