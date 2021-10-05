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
    
    try{
        //check email and phone 
        await usermodel.checkEmialAndPhone(req.body.credentials);
        
        //save db
        const newUser = await usermodel.create({
            ...req.body.credentials,
        })
        const token = newUser.generatejwtToken();
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

/*
@Route - /signin
@Desc  - signin using by email and password
@Params- None
@Access- Public
@Method - POST
*/

const signIn = async (req,res)=>{
    try{
        const user = await usermodel.getEmailAndPassword(req.body.credentials);
        const token = user.generatejwtToken();
        return res.status(200).json({
            token,
            status: "success"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
module.exports ={
    signUp,
    signIn
}