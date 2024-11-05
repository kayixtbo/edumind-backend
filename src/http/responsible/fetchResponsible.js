const express = require("express")
const router = express.Router()

const {fetchResponsible} = require("../../use-cases/responsible/fetchResponsible.js")

router.get("/:id",async (req, res)=>{
    let id = req.params.id
    let response = await fetchResponsible(id)
    
    res.send(response)
})

module.exports = router