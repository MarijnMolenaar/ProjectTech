const mongodb=require('mongodb');  
const MongoClient=mongodb.MongoClient;  
const url='mongodb://localhost:27017/autos';  
MongoClient.connect(url,function(error,databases){  
    if(error){  
        throw error;  
          
    }  
    const nodtst=databases.db("navigcollection");  
    const pract=[  
    {_id:1,name:"Audi S3" , bouwjaar: "2005", kilometerstand:"60000", vraagprijs: "$6000", bod: "$5000", like: 0},  
    {_id:2,name:"BMW X5" , bouwjaar: "2019", kilometerstand:"14000", vraagprijs: "$80000", bod: "$79000", like: 0},  
    {_id:3,name:"Volvo D2" , bouwjaar: "2016", kilometerstand:"80000", vraagprijs: "$7000", bod: "$5000", like: 0},
    {_id:4,name:"VW Golf R32" , bouwjaar: "2020", kilometerstand:"3000", vraagprijs: "$70000", bod: "$6000", like: 0},  
    {_id:5,name:"Nissan SKyline" , bouwjaar: "2005", kilometerstand:"25000", vraagprijs: "$125000", bod: "$150000", like: 0},  
    {_id:6,name:"Nissan Juke" , bouwjaar: "2015", kilometerstand:"100000", vraagprijs: "$5", bod: "$1", like: 0}  
  ]  
nodtst.collection('pract').insertMany(pract , function(error,response){  
    if(error){  
        throw error;  
      
    }  
    console.log("Numnber of document is inserted.........");  
})  
})  

// bron: https://www.c-sharpcorner.com/article/crud-operation-in-mongodb-using-node-js-vs-codemongodb-compass/