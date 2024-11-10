const express = require('express');
const app = express()
const {dataSource} = require('./src/dataSource.js');
require('dotenv').config()

// definição de porta e host local
const port = process.env.PORT ? parseInt(process.env.PORT) : 8000
const host = process.env.HOST ? process.env.HOST : "localhost"

// rotas school
const routesClass = require("./src/http/class/@routes.js")
const routesSchool = require("./src/http/school/@routes.js")
const routesFeedback = require("./src/http/feedback/@routes.js")
const routesResponsible = require("./src/http/responsible/@routes.js")
const routesProfessional = require("./src/http/professional/@routes.js")
const routesStudent = require("./src/http/student/@routes.js")

app.use(
    express.urlencoded({
      extended: true
    })
)
app.use(express.json());

// definição de rotas da entidade school
app.use("/", routesClass)
app.use("/", routesFeedback)
app.use("/", routesProfessional)
app.use("/", routesResponsible)
app.use("/", routesSchool)
app.use("/", routesStudent)

dataSource.initialize()
    .catch(function (error) {
        console.log("Error: ", error)
    })

app.listen(port,()=>{
    console.log(`App running in http://${host}:${port}`);
})
