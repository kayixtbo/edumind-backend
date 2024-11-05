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


dataSource.initialize()
    .catch(function (error) {
        console.log("Error: ", error)
    })

app.listen(port,()=>{
    console.log(`App running in http://${host}:${port}`);
})
