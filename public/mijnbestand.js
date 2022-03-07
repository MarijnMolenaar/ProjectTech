const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
app.set('view engine', 'pug')
app.use(express.static('style.css'))
app.use(express.static('public'));

var bodyParser = require('body-parser')

app.get('/index', (req, res) => {
  res.sendFile('index.html', {root: __dirname})
})

app.get('/account', (req, res) => {
  res.sendFile('account.html', {root: __dirname})
})

app.get('/tags', (req, res) => {
  res.sendFile('tags.html', {root: __dirname})
})

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

app.get('/tags', (req, res) => {
  res.render('tags.html')
})

app.listen(8080)

app.use(express.static('content'))



// Javascript logic

function validateForm() {
  let x = document.forms["registratieForm"]["naam"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

console.log("JS verbonden, fijne dag!")