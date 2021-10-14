const express = require("express");
const router = express.Router();

const {
    orderId
}=require("../../../Controllers/Order/index");
/*
@Route - /order/:_id
@Desc  - Get order based on id
@Params- _id
@Access- Public
@Method - Get
*/
router.get("/:_id", orderId);
module.exports = router;
