const express = require("express")
const router = express.Router()
const {deleteResponsible} = require("../../use-cases/responsible/deleteResponsible")

router.delete("/:id",async (req, res)=>{

    try {
        let id = req.params.id    
        let response = await deleteResponsible(id)
        
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router