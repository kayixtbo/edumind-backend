const express = require("express")
const router = express.Router()

const {getStudents} = require("../../use-cases/student/getStudents")
router.get("/",async (req, res)=>{
    let {id_school} = req.query
    let response = await getStudents(id_school)
    
    res.send(response)
})

module.exports = router