const mongodb=require('mongodb');  
const MongoClient=mongodb.MongoClient;  
const url ='mongodb://localhost:27017/';  
MongoClient.connect(url,function(error,databases){  
    if(error)  
{  
    throw error;  
}  
const nodtst=databases.db('navigcollection');  
const deleteQuery={name:'Menu'};  
   nodtst.collection("pract").deleteOne(deleteQuery,function(error,response){  
        if(error){  
            throw error;  
  
        }  
console.log(response.result +" 1 document deleted......");  
databases.close();  
  
    })  
  
});  