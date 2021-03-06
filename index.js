var express = require('express')
var server = express()
var jonathan = require('./me.json')
var port = 3000

server.get('/', function (request, response) {
  response.send('Go to /jonathan to find out more about me')
})

server.get('/jonathan', function (request, response) {
  response.json(jonathan)
})

server.get('*', function (request, response) {
  response.status(400)
  response.send('OH NO!!!!')
})

server.listen(process.env.PORT || port)
