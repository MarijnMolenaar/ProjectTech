const {ObjectId} = require('mongodb');
const bodyParser = require('body-parser');

const { response } = require('express');
const {MongoClient} = require('mongodb');
const express = require('express')
const dotenv = require('dotenv').config();
const ejs = require('ejs');
const { stringify } = require('querystring');
const slug = require('slug');
require('mongodb').MongoClient;
const assert = require('assert'); 


const app = express()
const port = process.env.PORT || 3030
let db = null;


app.set('view engine', 'ejs')
// app.use(express.static('style.css'))
// app.use(express.static('tinderesque.css'))
app.use(express.static('public'));
// app.use(express.static('content'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Autos updaten via formulier
app.post('/index', urlencodedParser, async (req,res) => {
    const bod = req.body.bod
    const like = req.body.like
    const query = {};

// // alleen bod en like meegeven ipv alles
    let autoscollection = {
      //naam: req.body.naam,
      bod: req.body.bod,
      //bouwjaar: req.body.bouwjaar,
      //kmstand: req.body.kmstand,
      likes: req.body.likes,
    };

      // Bod en like worden geupdate per db tabel
      const updatesautoprofiel =  db.collection('autoscollection').findOne();
      console.log("POST request doorgekomen");
      console.log(bod);
      console.log(like);
      res.redirect('/index')

      db.collection('autoscollection').updateOne(
        { "_id": ObjectId("6239c6e140fe869abda7f8f9") }, 
        { $set: { "bod": req.body.bod } },
        console.log( "document updated")
      );

      db.collection('autoscollection').updateOne(
        { "_id": ObjectId("6239c8857d83f186a264a2ea") }, 
        { $set: { "bod": req.body.bod } },
        console.log( "document updated")
      );

      db.collection('autoscollection').updateOne(
        { "_id": ObjectId("6239c8bb7d83f186a264a2eb") }, 
        { $set: { "bod": req.body.bod } },
        console.log( "document updated")
      );

      // const whereClause = { id: 6239 };  
      // const newvalues = { $set: { bod: req.body.bod}};  

      // nodtst.collection("autoscollection").updateOne(whereClause,newvalues,function(err,res){  
      //   if(error){  
      //       throw error;  
      
      //   }  
      //   console.log(res.result + "document updated"); 
})


  app.get('/', async (req,res) => {
    //const auto = await db.collection('autoscollection').findOne();
    const auto = await db.collection('autoscollection').find({}).toArray();
    console.log(auto)
    res.render('index', {auto})

    //const autolijst = await db.collection('autoscollection').find();

    
  })

  app.post('/', async (req, res) => {

    collection.updateOne(query, update, options);

    const listing = await db.collection('autoscollection').findOne();

    res.render('index', {listing, autoscollection});

    console.log(autoscollection);
  })



app.get('/submit-index.html', (req, res) => {
    return response.send(request.query);
  })



app.get('/index', (req, res) => {
  res.sendFile('index.ejs', {root: __dirname})
})  




console.log("JS verbonden, fijne dag!")


// Connectie met database wordt gemaakt
async function connectDB() {
    const uri = process.env.DB_URI;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        db = client.db(process.env.DB_NAME);
    } catch (error) {
        throw error;
    }
}

// De server wordt opgestart
app.listen(port, () => {
    console.log(`===============================================================\n\n Example app listening on port ${port}`);
    connectDB().then(() => console.log('We have a connection to Mongo!'));
})


////////////////////
// Code graveyard //
////////////////////

           // Find the document that describes "lego"
    //const query = { "naam": "Tesla" };
    //Set some fields in that document
    // const update = {
    //   "$set": {
    //     "bod": req.body.bod,
    //     "likes": req.body.likes,
    //   }
    // };
  //   // Return the updated document instead of the original document
  //   const options = { returnNewDocument: true };

  //   return itemsCollection.findOneAndUpdate(query, update, options)
  // .then(updatedDocument => {
  //   if(updatedDocument) {
  //     console.log(`Successfully updated document: ${updatedDocument}.`)
  //   } else {
  //     console.log("No document matches the provided query.")
  //   }
  //   return updatedDocument
  // })
  // .catch(err => console.error(`Failed to find and update document: ${err}`))



    // const query = { naam: "Audi Quattro S1" };
    // const update = { $set: { name: "Audi Quattro S1", bod: req.body.bod, likes: req.body.likes, }};
    // const options = {};


  //   autoscollection.products.findOneAndUpdate(
  //     { _id: 6239 },
  //     { $set:
  //        {
  //          bod: req.body.bod,
  //          likes: req.body.like
           
  //        }
  //     }
  //  )


          //  bod: req.body.bod,
          //  likes: req.body.like


  // app.post('/submit-form', (req, res) => {
  //   const username = req.body.username
  //   //...
  //   res.end()
  // })


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


// const schema = mongoose.Schema;

// const listingData = new schema({
//   name: {type: String},
//   bouwjaar: {type: String},
//   kilometerstand: {type: String},
//   vraagprijs: {type: String},
//   bod: {type: String}
// }, {collection: 'autoData'});

// const autoData = mongoose.model('autoData', listingData);



// app.get('/', async (req, res) => {
//   try {
//      const autos = await UserModel.find()
//      res.render('index', { x: autos })
//   } catch (error) {
//      res.status(404).send('Rip, er is wat misgegaan!')
//   }
// })



  // const autoSchema = {
  //   naam: String,
  //   bod: String,
  //   bouwjaar: String,
  //   kmstand: String
  // }

  //const autos = mongoose.model('autos', autoSchema);



  //mongoose.connect('mongodb+srv://marijn78:marijn78@cluster0.dw0r4.mongodb.net/autoscollection?retryWrites=true&w=majority');


//const autoscollection = ["Travel", "Dogs", "Cooking", "Surfing", "Politics", "Cats", "Fitness", "Reading", "Netflix", "Partying"];


//let db = null;



// app.get('/account', (req, res) => {
//   res.sendFile('account.html', {root: __dirname})
// })

// app.get('/tags', (req, res) => {
//   res.sendFile('tags.html', {root: __dirname})
// })

// app.get('/', (req, res) => {
//   res.send('root')
// })


// app.get('/tags', (req, res) => {
//   res.render('tags.html')
// })

// TODO
// VOEG 404 toe