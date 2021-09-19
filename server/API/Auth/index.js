//Library
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
//Model
const usermodel = require('../../Models/user/user.model');

const router = express.Router();

/*
@Route - /signup
@Desc  - Register new user
@Params- None
@Access- Public
Method - POST
*/

router.post("/singup", async (req,res)=>{
    const {
        fullname,
        email,
        password,
        phoneNumber
    }=req.body.credentials;//object inside the body
    try{
        //check email and phone 
        const checkUserByEmail = await usermodel.findOne({email});
        const checkUserByPhone = await usermodel.findOne({phoneNumber});

        //check whether email exits
        if(checkUserByEmail||checkUserByPhone){
            return(
                res.json({
                    data: [],
                    message: {
                        email:"User already exits"
                    }
                })
            )
        }

        //hash_password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bcryptSalt)

        //save db
        await usermodel.create({
            ...req.body,
            password:hashedPassword
        })

        //generate JWT auth token
        const token = jwt.sign({user: {fullname,email}},"ZomatoApp")

        return res.status(200).json({
            token, 
            status:"success"
        })

    }catch(error){
        return res.status(500).json({
            error:error.message
        })
    }
})