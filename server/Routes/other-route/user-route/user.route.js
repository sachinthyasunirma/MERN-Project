const express = require('express');
const passport = require('passport');
const router = express.Router();


const{
    signUp,
    signIn,
}=require('../../../Controllers/Auth/index');

// create post route for the signup
router.post("/signup", signUp)
router.post("signin", signIn)

/*
@Route - /auth/google
@Desc  - signin using by email and password
@Params- None
@Access- Public
@Method - POST
*/
router.get("/google",passport.authenticate("google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ]
}))
/*
@Route - /auth/google/callback
@Desc  - signin using by email and password
@Params- None
@Access- Public
@Method - POST
*/
router.get("google/callback", passport.authenticate("google",{failureRedirect: "/"}),(req,res)=>{
    return res.redirect(
        `https://localhost:4000/google/${req.session.passport.user.token}`
    )
}
)

module.exports = router;