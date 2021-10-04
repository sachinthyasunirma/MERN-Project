const express = require('express');
const router = express.Router();

//import user route from the other route
const userRoute = require('../other-route/user-route/user.route');
//create user route
router.use("/user",userRoute);



module.exports = router;