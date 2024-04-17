const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchName = "search now"
  res.render('index', {siteName : siteName, searchName : searchName})
})

app.get('/blog/:slug', (req, res) => {
  let blogName = "Adidas whyit's very good brand"
  let blogContent = "it's very good brand"
  res.render('blogpost', {blogtitle : blogtitle, blogContent : blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})