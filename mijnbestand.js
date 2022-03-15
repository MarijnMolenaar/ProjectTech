const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
app.use(express.static('style.css'))
app.use(express.static('public'));
app.set('view engine', 'pug')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pract');
const bodyParser = require('body-parser');
const { response } = require('express');
//const { default: mongoose } = require('mongoose');
//const mongo = require('mongodb');

require('mongodb').MongoClient;
const assert = require('assert'); 

const { stringify } = require('querystring');

const url='mongodb://localhost:27017/autos';

const port = process.env.PORT || 3000

// const schema = mongoose.Schema;

// const listingData = new schema({
//   name: {type: String},
//   bouwjaar: {type: String},
//   kilometerstand: {type: String},
//   vraagprijs: {type: String},
//   bod: {type: String}
// }, {collection: 'autoData'});

// const autoData = mongoose.model('autoData', listingData);

app.get('/get-data', function (req, res, next){
  autoData.find()
    .then(function(doc){
      res.render('index', {items: doc});
    })
})

app.get('/update', (req, res) => {

}) 

app.use(express.urlencoded({
    extended: true
  }))

app.post('/', (req,res) => {
    const bod = req.body.bod
    const like = req.body.like
    console.log("POST request doorgekomen");
    console.log(bod);
    console.log(like);
    res.redirect('/index');
    
})


  app.post('/submit-form', (req, res) => {
    const username = req.body.username
    //...
    res.end()
  })

  app.get('/index', (req, res) => {
    res.sendFile('index.html', {root: __dirname,})
  })


  // app.get('/index', (req, res) => {

  //   for(i = 0; i < totalpract.length; i++) {  
  //   let data = (pract.name + ", " + pract.bouwjaar + ", " + pract.kilometerstand + ", " + pract.bouwjaar + ", ");  
  // }  

  // console.log(dataUitDatabase)

  //   res.sendFile('index.html', {
  //     root: __dirname,
  //     dataUitDatabase: data
  //   })
  // })



  

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

app.listen(3000)

app.use(express.static('content'))

console.log("JS verbonden, fijne dag!")