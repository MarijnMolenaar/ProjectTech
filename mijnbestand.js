const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
app.use(express.static('style.css'))
app.use(express.static('tinderesque.css'))
app.use(express.static('public'));
app.set('view engine', 'pug')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pract');
const bodyParser = require('body-parser');
const { response } = require('express');

require('mongodb').MongoClient;
const assert = require('assert'); 

const { stringify } = require('querystring');



const port = process.env.PORT || 3000



app.get('/index', async (req, res) => {
  try {
     const autos = await UserModel.find()
     res.render('index', { x: autos })
  } catch (error) {
     res.status(404).send('Oeps, er is wat misgegaan!')
  }
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


app.get('/tags', (req, res) => {
  res.render('tags.html')
})


app.use(express.static('content'))

console.log("JS verbonden, fijne dag!")

// arcive


// const schema = mongoose.Schema;

// const listingData = new schema({
//   name: {type: String},
//   bouwjaar: {type: String},
//   kilometerstand: {type: String},
//   vraagprijs: {type: String},
//   bod: {type: String}
// }, {collection: 'autoData'});

// const autoData = mongoose.model('autoData', listingData);


app.listen(3000)



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



  //const { default: mongoose } = require('mongoose');
//const mongo = require('mongodb');