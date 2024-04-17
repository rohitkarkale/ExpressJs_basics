const express = require("express")
const app = express()
const fs = require('fs')

app.use(express.static("public"))

// middleware 1

app.use('/',(req,res,next)=>{
    fs.appendFileSync("note.text",`${Date.now()} is a ${req.method}\n`) // to create file 
    
    // console.log("middleware 1")
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

// middleware 2 

app.get('/',(req,res,next)=>{
    console.log("middleware 2")
    next()
})


app.get('/',(req,res)=>{
    console.log("hello23")
    res.send("rohit")
})

app.get('/about',(req,res)=>{
  
    res.send("about")
})

app.get('/contact',(req,res)=>{

    res.send("contact")
})

app.listen(3001)

// read types of middleware and do practice (mdn references)