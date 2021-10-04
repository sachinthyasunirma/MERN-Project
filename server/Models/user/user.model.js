const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName :{ 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:[{
        details:{
            type: String,
        },
        for:{
            type: String,
        }
    }],
    phoneNumber:{
        type: String,
    }
},{
    timestamps : true
})

const UserModel = mongoose.model("Users", UserSchema);//create collection user 

module.exports = UserModel;
