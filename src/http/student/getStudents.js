const express = require("express")
const router = express.Router()

const {getStudents} = require("../../use-cases/student/getStudents")
router.get("/",async (req, res)=>{

    try {
        let {id_school} = req.query
        let response = await getStudents(id_school)
        
        res.json(response)
        
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router