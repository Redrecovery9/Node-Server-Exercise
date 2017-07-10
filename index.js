var express = require('express')
var server = express()

server.get('/', function (request, response) {
  response.send('Hey I know what I\'m doing!!')
})
