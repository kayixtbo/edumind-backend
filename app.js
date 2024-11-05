const express = require('express');
const app = express()
const path = require('path');
const {dataSource} = require('./src/dataSource.js');
const {createSchool} = require('./src/classes/school/createSchool.js');
require('dotenv').config()

app.use(
    express.urlencoded({
      extended: true
    })
  )

app.use(express.json());

const port = process.env.PORT ? parseInt(process.env.PORT) : 8000
const host = process.env.HOST ? process.env.HOST : "localhost"

app.post("/create/school",async (req, res)=>{
    let {name, cnpj, adress} = await req.body    
    let response = await createSchool(name, cnpj, adress)
    res.send(response)
})

dataSource.initialize()
    .catch(function (error) {
        console.log("Error: ", error)
    })

app.listen(port,()=>{
    console.log(`App running in http://${host}:${port}`);
})
