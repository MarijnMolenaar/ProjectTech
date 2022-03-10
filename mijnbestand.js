const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
app.use(express.static('style.css'))
app.use(express.static('public'));
app.set('view engine', 'pug')

const bodyParser = require('body-parser');
const { response } = require('express');

app.use(express.urlencoded({
    extended: true
  }))


  app.post('/submit-form', (req, res) => {
    const username = req.body.username
    //...
    res.end()
  })


app.get('/index', (req, res) => {
  res.sendFile('index.html', {root: __dirname})
})

app.get('/submit-index.html', (req, res) => {
    return response.send(request.query);
  })

app.get('/', (req, res) => {
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