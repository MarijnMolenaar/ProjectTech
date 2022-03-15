const mongodb=require('mongodb');  
const MongoClient=mongodb.MongoClient;  
const url='mongodb://localhost:27017/autos';  
MongoClient.connect(url,function(error, databases){// use for to connect to the databases  
if(error){  
    throw error;  
  
}  
const dbobject=databases.db('navigcollection');//use for create database   
console.log("databases is created")  
databases.close();  
  
})  

// bron: https://www.c-sharpcorner.com/article/crud-operation-in-mongodb-using-node-js-vs-codemongodb-compass/