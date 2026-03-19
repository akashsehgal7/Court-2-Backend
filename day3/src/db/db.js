const mongoose = require('mongoose');
 async function conectDB(){
    await mongoose.connect("mongodb+srv://akashsehgal2005_db_user:<db_password>@cluster0.l1qb5bg.mongodb.net/halley");

    console.log("connect to DB");
}


module.exports = conectDB;



// https://cloud.mongodb.com/v2/6988aac01862797a4d2915c0



// https://cloud.mongodb.com/v2/6986daba320e3c68380aa407


// mongodb+srv://akashsehgal2005_db_user:<db_password>@cluster0.l1qb5bg.mongodb.net/