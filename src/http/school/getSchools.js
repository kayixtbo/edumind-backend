const express = require("express")
const router = express.Router()

const {getSchool} = require("../../use-cases/school/getSchool")

router.get("/",async (req, res)=>{
    try {
        let response = await getSchool()
        res.json(response)
    } catch (error) {
        res.json({erro: `${error.message}`})
    }
})

module.exports = router