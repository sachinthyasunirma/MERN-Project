const express = require('express');
const router = express.Router();


const{
    signUp,
    signIn,
}=require('../../../Controllers/Auth/index');

// create post route for the signup
router.post("/signup", signUp)

module.exports = router;