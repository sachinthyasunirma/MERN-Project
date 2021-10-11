const express = require("express");

const router = express.Router();

const{
    searchMenuById,
    getAllRelaMenuImage
}=require("../../../Controllers/Menu/index");

/*
@Route - /menu
@Desc  - Search Menu based on the _id
@Params- _id
@Access- Public
@Method - Get
*/
router.get("/:_id", searchMenuById);
/*
@Route - /menu/image/:_id
@Desc  - Get all images realted to menu
@Params- _id
@Access- Public
@Method - Get
*/
router.post("/image/:_id", getAllRelaMenuImage);

module.exports = router;