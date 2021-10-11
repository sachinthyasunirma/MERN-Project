const express = require("express");

const router = express.Router();

const{
    searchMenuById,
}=require("../../../Controllers/Menu/index");

/*
@Route - /list
@Desc  - Search Menu based on the _id
@Params- _id
@Access- Public
@Method - Get
*/
router.get("/list", searchMenuById);

module.exports = router;