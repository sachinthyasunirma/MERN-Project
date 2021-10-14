const express = require('express');
const router = express.Router();
/*
@Route - /user/:_id
@Desc  - get user data
@Params- _id
@Access- Public
@Method - GET
*/
router.get("/:_id", getUserData);

module.exports = router;