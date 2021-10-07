const express = require('express');

const router = express.Router(); 
//import the business controller
const{
    searchResByLocation,
    searchResById,
    searchByString
}=require("../../../Controllers/Restaurant/index");
/*
@Route - /
@Desc  - Search restaurant based on the current location
@Params- None
@Access- Public
@Method - Get
*/
router.get("/", searchResByLocation);
/*
@Route - /restaurant:_id 
@Desc  - Search restaurant based on the current id
@Params- _id
@Access- Public
@Method - Get
*/
router.get("/:_id",searchResById);
/*
@Route - /restaurant/searchString
@Desc  - Search restaurant based on the current string
@Params- None
@Access- Public
@Method - Get
*/
router.get("/searchString", searchByString);

module.exports = router;