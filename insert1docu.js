const mongodb = require('mongodb');  
  
const mongoClient = mongodb.MongoClient;  
const url = "mongodb://localhost:27017/autos";  
  
mongoClient.connect(url, function(err, databases) {  
      if (err)   
      {  
        throw err;  
      }  
      const nodetestDB = databases.db("navigcollection"); //here  
      const customersCollection = nodetestDB.collection("pract");    
      const customer = {_id:111, name:"Santosh Kumar" , address: "B-222, Sector-19, NOIDA", orderdata:"Arrow Shirt"};  
        
      customersCollection.insertOne(customer, function(error, response) {  
          if (error) {  
              throw error;  
          }  
        
          console.log("1 document inserted");  
          databases.close();  
      });  
});   