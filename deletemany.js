const mongodb=require('mongodb');  
const MongoClient=mongodb.MongoClient;  
const url='mongodb://localhost:27017/';  
MongoClient.connect(url,function(error,databases){  
    if(error)  
    {  
        throw error;  
  
    }  
    const nodtst=databases.db('navigcollection');  
    const deleteQuery={};  
    nodtst.collection('pract').deleteMany(deleteQuery,function(error,response){  
        if(error){  
            throw error;  
  
        }  
        console.log(response.result + "document(s) deleted successfully .....");  
        databases.close();  
  
          
  
    })  
})  

// bron: https://www.c-sharpcorner.com/article/crud-operation-in-mongodb-using-node-js-vs-codemongodb-compass/