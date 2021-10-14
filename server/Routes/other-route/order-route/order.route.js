const express = require("express");
const router = express.Router();

const {
    orderId,
    orderNew
}=require("../../../Controllers/Order/index");
/*
@Route - /order/:_id
@Desc  - Get order based on id
@Params- _id
@Access- Public
@Method - Get
*/
router.get("/:_id", orderId);
/*
@Route - /order/new
@Desc  - Get new order based on id
@Params- _id
@Access- Public
@Method - post
*/
router.post("/new/:_id", orderNew)
module.exports = router;
