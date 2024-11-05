const express = require("express")
const router = express.Router()

const {getSchool} = require("../../use-cases/school/getSchol")

router.get("/",async (req, res)=>{
    let response = await getSchool()
    
    res.send(response)
})

module.exports = router