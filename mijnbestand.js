//Routes

const express = require('express')
const app = express()

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

app.get('/index.html', (req, res) => {
  res.send('index.html')
})

app.listen(8080)

app.use(express.static('content'))

// Javascript logic

