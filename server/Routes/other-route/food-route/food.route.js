const express = require('express')
const router = express.Router();

const {
    searchResById,
    searchCateByString
}=require('../../../Controllers/Food/index');
/*
@Route - /food/r/:id
@Desc  - Get food based on the resturant 
@Params- _id
@Access- Public
@Method - Get
*/
router.get("/r/:id", searchResById);
/*
@Route - /food/c/category
@Desc  - Get foods based on the category
@Params- category
@Access- Public
@Method - Get
*/
router.get("/c/:category", searchCateByString);

module.exprots = router;