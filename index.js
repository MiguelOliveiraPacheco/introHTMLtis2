const { response } = require('express')
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'))
 
app.get('/', function (req, res) {
  response.sendFile(path.join(_dirname, '/public/index.html'))
})

app.listen(3000)