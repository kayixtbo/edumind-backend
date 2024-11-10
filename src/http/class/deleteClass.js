const express = require("express")
const router = express.Router()
const {deleteClass} = require("../../use-cases/class/deleteClass")

router.delete("/:id",async (req, res)=>{
    try {
        let id = req.params.id    
        let response = await deleteClass(id)
        
        res.json(response)
    
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router