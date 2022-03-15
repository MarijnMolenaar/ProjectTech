const mongodb=require('mongodb');  
const MongoClient=mongodb.MongoClient;  
const url="mongodb://localhost:27017/"  
MongoClient.connect(url,function(error,databases){  
    if(error){  
        throw error;  
  
    }  
    const nodtst=databases.db("navigcollection");  
    const whereClause = { name:/Audi S3/};  
    const newvalues = { $set: { name:"Audi rs5"}};  
nodtst.collection("pract").updateOne(whereClause,newvalues,function(err,res){  
    if(error){  
        throw error;  
  
    }  
    console.log(res.result + "document updated");  
});  
});  

// const mongodb=require('mongodb');  
// const MongoClient=mongodb.MongoClient;  
// const url="mongodb://localhost:27017/"  
// MongoClient.connect(url,function(error,databases){  
//     if(error){  
//         throw error;  
  
//     }  
//     const nodtst=databases.db("navigcollection");  
//     const whereClause = { name:/Audi S3/};  
//     const newvalues = { $set: { name:"Audi rs5"}};  
// nodtst.collection("pract").updateOne(whereClause,newvalues,function(err,res){  
//     if(error){  
//         throw error;  
  
//     }  
//     console.log(res.result + "document updated");  
// });  
// });  

// bron: https://www.c-sharpcorner.com/article/crud-operation-in-mongodb-using-node-js-vs-codemongodb-compass/