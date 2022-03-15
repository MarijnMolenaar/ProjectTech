const mongodb=require("mongodb");  
const MongoClient=mongodb.MongoClient;  
const url='mongodb://localhost:27017/';  
MongoClient.connect(url, function(error, databases){  
    if(error){  
        throw error;  
  
    }  
    const nodtst = databases.db("navigcollection");  
    
    nodtst.collection("pract").findOne({name:'Audi S3'}, function(err, result) {  
        if (err) throw err;  
        console.log("Records:....."+result.name + ", " + result.bouwjaar + ", " + result.kilometerstand);  
        databases.close();   
    })  
})  

// bron: https://www.c-sharpcorner.com/article/crud-operation-in-mongodb-using-node-js-vs-codemongodb-compass/