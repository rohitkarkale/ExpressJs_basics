const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Shop here')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About shop')
})

router.get('/newpage/:slug', (req, res) => {
    res.send(`Hello Welcome to ${req.params.slug} site`)
  })

module.exports = router