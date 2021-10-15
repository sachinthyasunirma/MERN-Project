const express = require("express");
const cors = require("cors");//Cross-Orign Resource Sharing
const dotenv = require("dotenv");//for the security reason we have to hide the imprtent things then we can use dotenv that not allow to the outside
const passport = require('passport');

//configs
const googleAuthConfig = require('./Config/google.config');
const routerConfig = require('./Config/route.config');
//enable enviroment file
dotenv.config();

const db = require("./database/db");

const app = express();

//passport configs
// googleAuthConfig(passport);
routerConfig(passport);

app.use(cors());//allow to access our API
app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());
//main
const mainRoute = require("./Routes/main-route/main.route");
app.use("/api", mainRoute);
//Start Server Call
app.listen(process.env.PORT,()=>{
    console.log(`Listening at http://loaclhost:${process.env.PORT}`);
})