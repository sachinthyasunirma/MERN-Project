const express = require('express');
const router = express.Router();

//import user route from the other route
const userRoute = require('../other-route/user-route/user.route');
//create user route
router.use("/user",userRoute);

//import restaurant route from the other route restaurant
const restaurantRoute = require('../other-route/restaurant-route/restauranr.route');
router.use("/restaurant",restaurantRoute);

//import food route from  the other route food
const foodRoute = require("../other-route/food-route/food.route");
module.exports = router;