const express = require("express")
const router = express.Router()

const {createStudent} = require("../../use-cases/student/createStudent")

router.post("/create",async (req, res)=>{

    try {
        
        let {name, birth, registration, id_school, id_responsible, id_class} = await req.body
    
        let newBirth = new Date(birth)
        let response = await createStudent(name, registration,newBirth,id_school, id_responsible, id_class)
    
        res.send(response)
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router