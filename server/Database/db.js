//import mongoose
const mongoose = require('mongoose');

//password mongodb 
const password = encodeURIComponent(process.env.MDB_PASSWORD);
const url = `mongodb+srv://${process.env.MDB_USER}:${password}@zomato.u4f1q.mongodb.net/${process.env.MDB_NAME}?retryWrites=true&w=majority`;

//mongose connect with db and mongoose options
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

// connection
const dbConn = mongoose.connection;

//handle error
dbConn.on("error", console.log.bind(console, "connection error"));
dbConn.on("open",()=>{
    console.log("DB connection Scussefull");
})

module.exports = dbConn;