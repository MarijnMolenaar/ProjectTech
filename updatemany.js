const mongodb = require('mongodb');  
  
const mongoClient = mongodb.MongoClient;  
const url = "mongodb://localhost:27017/";  
    
  
mongoClient.connect(url, function(err, databases) {  
  if (err)   
  {  
      throw err;  
  }  
  const nodeDB = databases.db("practicemongo"); //here  
  const myquery = { address: /Harvansh nagar/ };  
  const newvalues = {$set: {name: "Shivani"} };  
      nodeDB.collection("pract").updateMany(myquery, newvalues, function(err, res) {  
        if (err) throw err;  
        console.log(res.result.nModified + " document(s) updated");   
        databases.close();  
      });  
        
        
    });  