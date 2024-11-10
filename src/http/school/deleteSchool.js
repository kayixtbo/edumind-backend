const express = require("express")
const router = express.Router()
const {deleteSchool} = require("../../use-cases/school/deleteSchool")

router.delete("/:id",async (req, res)=>{
    let id = req.params.id
    try {
        let response = await deleteSchool(id)
        res.send(response)
    } catch (error) {
        res.json({error: `${error.message}`})
    }
    
})

module.exports = router