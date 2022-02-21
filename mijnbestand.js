const express = require('express')
const app = express()


// respond with "hello world" when a GET request is made to the homepage
//app.get('/', (req, res) => {
//  res.send('hello world')
//})

app.get('/', (req, res) => {
  res.send('root')
})

app.get('/users', (req, res) => {
  res.send('users')
})

app.get('/contact', (req, res) => {
  res.send('contact')
})

app.get('/home', (req, res) => {
  res.send('home')
})

app.get('/pug', (req, res) => {
  res.send('pug')
})

app.get('/index', (req, res) => {
  res.send('file:///C:/Users/marij/myapp/index.html')
})


app.listen(8080)

app.use(express.static('content'))





//var http = require('http');
 //http.createServer(function (req, res) {
 //  res.writeHead(200, {'Content-Type': 'text/html'});
 //  res.end('Het werkt wtf!');
// }).listen(8080);