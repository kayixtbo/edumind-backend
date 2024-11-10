const express = require("express")
const router = express.Router()

const {fetchResponsible} = require("../../use-cases/responsible/fetchResponsible.js")

router.get("/:id",async (req, res)=>{

    try {
        let id = req.params.id
        let response = await fetchResponsible(id)
        
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router