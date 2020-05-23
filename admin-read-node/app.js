const express = require('express')
const router = require('./router')

const app = express()

app.use('/', router)

function handleError(err, req, res, next) {
  console.log(err)
  res.status(500).json({
    error: -1,
    msg: err.toString()
  })
}

app.use(handleError)

const server = app.listen(5000, function() {
  const {port, address} = server.address()
  console.log('HTTP启动成功')
})