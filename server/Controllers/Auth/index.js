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
@Method - POST
*/
const signUp =  async (req,res)=>{
    const {
        fullName,
        email,
        password,
        phoneNumber
    }=req.body.credentials //object inside the body
    try{
        //check email and phone 
        await usermodel.checkEmialAndPhone(req.body.credentials);
        
        //save db
        const newUser = await usermodel.create({
            ...req.body.credentials,
        })

        //generate JWT auth token
        const token = jwt.sign({user: {fullName,email}},"ZomatoApp")

        return res.status(200).json({
            token, 
            status:"success"
        })

    }catch(error){
        return res.status(500).json({
            error:error.message
        })
    }
}

module.exports ={
    signUp
}