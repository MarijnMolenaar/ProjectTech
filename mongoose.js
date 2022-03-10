const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/autos", 
{useNewUrlParser: true})

mongoose.connection 
    .once("open", () => console.log('Database verbonden! (mongoose.js, regel 6)'))
    .on("error", (error => {
        console.log("Oeps! Er is wat misgegaan", error);
    }))