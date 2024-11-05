const express = require("express")
const router = express.Router()

const {fetchSchool} = require("../../use-cases/school/fetchSchool.js")

router.get("/:id",async (req, res)=>{
    let id = req.params.id
    let response = await fetchSchool(id)
    
    res.send(response)
})

module.exports = router