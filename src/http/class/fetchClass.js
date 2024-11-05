const express = require("express")
const router = express.Router()

const {fetchClass} = require("../../use-cases/class/fetchClass")

router.get("/:id",async (req, res)=>{
    let id = req.params.id
    let response = await fetchClass(id)
    
    res.send(response)
})

module.exports = router