const express = require('express')
const router = express.Router()

router.get('/info', async function(req, res, next) {
  res.json('user info...')
})

module.exports = router