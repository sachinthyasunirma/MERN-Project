const express = require('express');
const router = express.Router();

//import user route from the other route
const userRoute = require('../other-route/user-route/user.route');
//create user route
router.use("/user",userRoute);

//import restaurant route from "other route restaurant"
const restaurantRoute = require('../other-route/restaurant-route/restauranr.route');
router.use("/restaurant",restaurantRoute);

//import food route from "other route food"
const foodRoute = require("../other-route/food-route/food.route");
router.use("/food",foodRoute);

//import Menu route from "other route menu"
const menuRoute = require("../other-route/menu-route/menu.route");
router.use("/menu", menuRoute);

//import Image route from "other route image"
const imageRoute = require("../other-route/image-route/image.route");
router.use("/image", imageRoute);

//import Order route from "other route order"
const orderRoute = require('../other-route/order-route/order.route');
router.use("/order", orderRoute);

module.exports = router;