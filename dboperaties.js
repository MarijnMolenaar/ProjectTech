const mongodb=require('mongodb');  
const MongoClient=mongodb.MongoClient;  
const url="mongodb://localhost:27017/"  

function UpdateEenListing(){
    MongoClient.connect(url,function(error,databases){  
        if(error){  
            throw error;  
      
        }  
        const nodtst=databases.db("navigcollection");  
        const whereClause = { name:/Audi S3/};  
        const newvalues = { $set: { name:"Audi rs6"}};  
    nodtst.collection("pract").updateOne(whereClause,newvalues,function(err,res){  
        if(error){  
            throw error;  
      
        }  
        console.log(res.result + "document updated");  
    });  
    });  
}