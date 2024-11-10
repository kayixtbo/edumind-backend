const express = require("express")
const router = express.Router()

const {putStudent} = require("../../use-cases/student/putStudent")

router.put("/:id",async (req, res)=>{

    try {
        
        let {id_clas,id_responsible, id_school,registration,name, birth} = await req.body
    
        if(birth){
            var birthForm = new Date(birth)
        }
    
        let id = req.params.id
        let response = await putStudent(
            {name: name,
            birth: birthForm,
            id_school: id_school,
            id_clas: id_clas,
            id_responsible: id_responsible,
            registration: registration}, id)
        
        res.json(response)
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router