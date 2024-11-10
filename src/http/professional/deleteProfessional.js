const express = require("express")
const router = express.Router()
const {deleteProfessional} = require("../../use-cases/professional/deleteProfessional")

router.delete("/:id",async (req, res)=>{
    try {
        let id = req.params.id
        let response = await deleteProfessional(id)
        res.json(response)
    } catch (error) {
        res.json({error: `${error.message}`})
    }
    
})

module.exports = router