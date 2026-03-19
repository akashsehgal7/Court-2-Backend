require("dotenv").config({ path: "./src/.env" });
// require("dotenv").config()
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();
app.listen("3000",()=>{
    console.log("server run on 3000 port");
})