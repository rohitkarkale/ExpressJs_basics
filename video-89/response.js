const express = require('express')
const blog = require('./routes/blog')
const shop = require('./shop/shop')
const app = express()
const port = 5000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop', shop)

app.get('/hello', (req, res) => {
    console.log("hey! its get request")
  res.send('Hello World!')
})

app.post('/',(req,res)=>{
    console.log("hey! its post request")
    res.send('Post request')
})

app.put('/',(req,res)=>{
    console.log("hey! its put request")
    res.send('Put request')
})

app.delete('/',(req,res)=>{
    console.log("hey! its delete request")
    res.send('Delete request')
})

// app.get('/index',(req,res)=>{
//     res.sendFile('video-89/public/index.html', {root : __dirname})
// })

app.get('/json',(req,res)=>{
    res.json({name : "Rohit"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})