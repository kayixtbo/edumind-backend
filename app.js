const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 8000
const host = process.env.HOST ? process.env.HOST : "localhost"

app.get("/",(req, res)=>{
    res.send("Hello Word")
})

app.listen(port,()=>{
    console.log(`App running in http://${host}:${port}/`);
})
