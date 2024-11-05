const express = require('express');
const app = express()
const {dataSource} = require('./src/dataSource.js');
require('dotenv').config()

// definição de porta e host local
const port = process.env.PORT ? parseInt(process.env.PORT) : 8000
const host = process.env.HOST ? process.env.HOST : "localhost"

// rotas school
const createSchool = require("./src/http/school/createSchool.js")
const getSchol = require("./src/http/school/getSchool.js");
const putSchool = require("./src/http/school/putSchool.js");
const fetchSchool = require("./src/http/school/fetchSchool.js");


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

dataSource.initialize()
    .catch(function (error) {
        console.log("Error: ", error)
    })

app.listen(port,()=>{
    console.log(`App running in http://${host}:${port}`);
})
