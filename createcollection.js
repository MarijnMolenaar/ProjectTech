const mongodb=require('mongodb');  
const MongoClient=mongodb.MongoClient;  
const url="mongodb://localhost:27017/autos"  
MongoClient.connect(url,function(error,databases){  
    if(error){  
        throw error;  
  
    }  
    const dbase=databases.db("navigcollection");  
    dbase.createCollection("pract",function(error,response){  
        if(error){  
            throw error;  
        }  
      
    console.log("collection is created.....")  
    databases.close();  
    });  
});  