require("dotenv").config()
const app = require('./src/app');
const connectToDb = require('./src/config/database');

// const mongoose = require('mongoose');
// function connectToDb(){
//     mongoose.connect('mongodb+srv://akash:f2KujyOUCVXrPltl@cluster0.l1qb5bg.mongodb.net/day7')
//     .then(()=>{
//         console.log("connect to db");
//     })
//     .catch(err =>{
//         console.log("db connection error:",err);
//     })
// }
connectToDb();
app.listen(3000,()=>{
    console.log("server run on port 3000");
})
