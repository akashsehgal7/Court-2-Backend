const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connect to db");
    })
    .catch(err =>{
        console.log("db connectioin error:",err);
    })
}

module.exports = connectToDb