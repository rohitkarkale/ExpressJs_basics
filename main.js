const express = require('express')
const app = express()
const port = 5000

app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/about',(req,res)=>{
    res.send("About Us")
})

app.get('/contact',(req,res)=>{
    res.send("contact us")
})

app.get('/help',(req,res)=>{
    res.send("Help")
})

app.get('/help/:name',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(`Hello welcome to ${req.params.name} section`)
})

// app.get('/help/whom',(req,res)=>{
//     res.send("To whom")
// })

app.listen(port, ()=>{
console.log(`Your site is running at ${port}`)})