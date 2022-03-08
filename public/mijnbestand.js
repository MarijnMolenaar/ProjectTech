const express = require('express')
const dotenv = require('dotenv').config();
app.set('view engine', 'pug')
app.use(express.static('style.css'))
app.use(express.static('public'));
const app = express()

const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const bodyParser = require('body-parser')

async function main(){
  const uri = "mongodb+srv://marijn78:marijn78@cluster0.dw0r4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try{
    await client.connect();
    await listDatabases(client);
  }catch(e){
    console.error(e);
  }finally{
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => {
    console.log('-${db.name}');
  })

}

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

//app.listen(8080)

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