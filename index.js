const { response } = require('express')
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'))
 
app.get('/', function (req, res) {
  response.sendFile(path.join(_dirname, '/public/navbar.html'))
})

const port = 5000;
app.listen(port, function (){
  console.log("Listenning on port: " + port)
})