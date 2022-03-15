const mongodb=require("mongodb");  
const MongoClient=mongodb.MongoClient;  
const url='mongodb://localhost:27017/';  
MongoClient.connect(url, function(error, databases){  
    if(error){  
        throw error;  
  
    }  
     
    const nodtst = databases.db("navigcollection");  
    nodtst.collection("pract").find({}).toArray(function(err, totalpract) {  
        if (err) throw err;  
          
        for(i = 0; i < totalpract.length; i++) {  
             let pract = totalpract[i];  
           console.log(pract.name + ", " + pract.address + ", " + pract.orderdata);  
         }  
           
           
          
        //console.log(result);  
        databases.close();  
    });    
});  

// bron: https://www.c-sharpcorner.com/article/crud-operation-in-mongodb-using-node-js-vs-codemongodb-compass/