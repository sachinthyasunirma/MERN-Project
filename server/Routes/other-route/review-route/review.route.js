const express = require('express');
const router = express.Router();

const{
    reviewResId,
    addNewReview,
    deleteReview
}=require('../../../Controllers/Review/index');

/*
@Route - /review/
@Desc  - Review based on food _id
@Params- _id
@Access- Public
@Method - Get
*/
router.get('/', reviewResId);
/*
@Route - /review/
@Desc  - add new review based on food
@Params- none
@Access- Public
@Method - Get
*/
router.post('/', addNewReview);
/*
@Route - /review/delete
@Desc  - delete review
@Params- _id
@Access- Public
@Method - Delete
*/
router.post('/:_id', deleteReview);
module.exports = router;