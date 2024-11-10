const express = require('express');
const app = express()
const {dataSource} = require('./src/dataSource.js');
require('dotenv').config()

// definição de porta e host local
const port = process.env.PORT ? parseInt(process.env.PORT) : 8000
const host = process.env.HOST ? process.env.HOST : "localhost"

// rotas school
const createSchool = require("./src/http/school/createSchool.js")
const getSchol = require("./src/http/school/getSchools.js");
const putSchool = require("./src/http/school/putSchool.js");
const fetchSchool = require("./src/http/school/fetchSchool.js");

// rotas class 
const createClass = require("./src/http/class/createClass.js")
const getClasses = require("./src/http/class/getClasses.js")
const putClass = require("./src/http/class/putClass.js")
const fetchClass = require("./src/http/class/fetchClass.js")
const deletClass = require("./src/http/class/deleteClass.js")

// rotas responsible
const createResponsible = require("./src/http/responsible/createResponsible.js")
const getResponsibles = require("./src/http/responsible/getResponsibles.js")
const putResponsible = require("./src/http/responsible/putResponsible.js")
const fetchResponsible = require("./src/http/responsible/fetchResponsible.js")

// rotas professional 
const createProfessional = require("./src/http/professional/createPofessional.js")
const getProfessionals = require("./src/http/professional/getProfessionals.js")
const putProfessional = require("./src/http/professional/putProfessional.js")
const fetchProfessional = require("./src/http/professional/fetchPofessional.js")

// rotas student 
const createStudent = require("./src/http/student/createStudent.js")
const getStudents = require("./src/http/student/getStudents.js")
const putStudent = require("./src/http/student/putStudent.js")
const fetchStudent = require("./src/http/student/fetchStudent.js")

// rotas feedback 
const createFeedback = require("./src/http/feedback/createFeedback.js")
const getFeedbacks = require("./src/http/feedback/getFeedbacks.js")
const putFeedback = require("./src/http/feedback/putFeedback.js")
const fetchFeedback = require("./src/http/feedback/fetchFeedbak.js")

app.use(
    express.urlencoded({
      extended: true
    })
)
app.use(express.json());

// definição de rotas da entidade school
app.use("/school", getSchol)
app.use("/school", createSchool)
app.use("/school", putSchool)
app.use("/school", fetchSchool)

// definição de rotas da entidade class
app.use("/class", getClasses)
app.use("/class", createClass)
app.use("/class", putClass)
app.use("/class", fetchClass)

// definição de rotas da entidade responsible
app.use("/responsible", getResponsibles)
app.use("/responsible", createResponsible)
app.use("/responsible", putResponsible)
app.use("/responsible", fetchResponsible)

// definição de rotas da entidade responsible
app.use("/professional", getProfessionals)
app.use("/professional", createProfessional)
app.use("/professional", putProfessional)
app.use("/professional", fetchProfessional)

// definição de rotas da entidade student
app.use("/student", getStudents)
app.use("/student", createStudent)
app.use("/student", putStudent)
app.use("/student", fetchStudent)

// definição de rotas da entidade student
app.use("/student", getFeedbacks)
app.use("/student", createFeedback)
app.use("/student", putFeedback)
app.use("/student", fetchFeedback)

dataSource.initialize()
    .catch(function (error) {
        console.log("Error: ", error)
    })

app.listen(port,()=>{
    console.log(`App running in http://${host}:${port}`);
})
